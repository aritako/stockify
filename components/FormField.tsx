import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { icons } from '@/constants/'
interface FormFieldProps {
  title: string
  value?: string
  placeholder?: string
  handleChangeText?: (text: string) => void
  className?: string
  inputStyle?: string
  error?: string
  toggleEye?: boolean
}

const FormField: React.FC<FormFieldProps> = ({ title, value, placeholder, handleChangeText, className, toggleEye = false, ...props }) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${className}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="flex-row items-center justify-center">
        <TextInput
          className="flex-1 w-full text-white font-psemibold text-base border-2 border-black-200 h-16 p-4 bg-black-100 rounded-2xl focus:border-secondary"
          value={value}
          placeholder={placeholder}
          placeholderTextColor={'#7B7B8B'}
          onChangeText={handleChangeText}
          secureTextEntry={toggleEye && !showPassword}
        />
        {toggleEye && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} className="absolute right-4 top-4">
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>

    </View>
  )
}

export default FormField