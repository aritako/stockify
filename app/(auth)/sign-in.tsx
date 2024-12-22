import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'


import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'
import { LoginForm, LoginFormSchema } from '@/models/AuthModels'

const SignIn: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const onSubmit = (data: any) => {
    console.log("Form Data:", data)
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
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Log in to Aora
          </Text>
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
                containerStyle="mt-5"
              />
            )}
          />
          <CustomButton
            title="Sign In"
            handlePress={handleSubmit(onSubmit)}
            containerStyle="mt-7"
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Dont have an account?{' '}
              <Link href="/sign-up" className="text-secondary font-psemibold">Sign Up.</Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn