import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, router } from 'expo-router'


import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { SignUpForm, SignUpFormSchema } from '@/models/AuthModels'
import { createUser } from '@/lib/appwrite'

const SignUp = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<SignUpForm>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const onSubmit: (data: SignUpForm) => void = async (data: SignUpForm) => {
    const { username, email, password } = data
    setIsSubmitting(true)
    try {
      const result = await createUser(email, password, username)
      if (!result) {
        throw new Error("Account creation failed.")
      }
      router.replace('/home')
    } catch (error) {
      Alert.alert("Error", (error as Error)?.message)
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full h-full justify-center px-4 my-6 min-h-[85vh]">
          <Image
            source={images.logo}
            resizeMode="contain"
            style={{ width: 120, height: 35 }}
          />
          <Text className="text-2xl text-white text-semibold my-10 font-psemibold">
            Sign up to Aora
          </Text>
          <View className="gap-4">
            <Controller
              name="username"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <FormField
                  title="Username"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={errors.username?.message as string}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <FormField
                  title="Email"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={errors.email?.message as string}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <FormField
                  title="Password"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  toggleEye={true}
                  error={errors.password?.message as string}
                />
              )}
            />
          </View>
          <CustomButton
            title="Sign Up"
            handlePress={handleSubmit(onSubmit)}
            containerStyle="mt-7"
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Already have an account?{' '}
              <Link href="/sign-in" className="text-secondary font-psemibold">Log In.</Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({})