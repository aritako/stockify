import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { icons } from '@/constants/'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'
interface FormFieldProps {
  title: string
  value?: string
  placeholder?: string
  onChange: (text: string) => void
  onBlur: () => void
  containerStyle?: string
  inputStyle?: string
  error?: string
  toggleEye?: boolean
}

const FormField: React.FC<FormFieldProps> = ({
  title,
  value,
  placeholder,
  onChange,
  onBlur,
  error,
  toggleEye = false,
  containerStyle,
  inputStyle,
}) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${containerStyle}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="flex-row items-center">
        <TextInput
          className={`flex-1 w-full text-white font-psemibold text-base border-2 border-black-200 h-16 p-4 bg-black-100 rounded-2xl ${error ? 'border-red-500' : ''
            } ${inputStyle}`}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          secureTextEntry={toggleEye && !showPassword}
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
        />
        {toggleEye && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-4"
          >
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text className="text-red-500 text-sm">{error}</Text>}
    </View>
  );
}

export default FormField