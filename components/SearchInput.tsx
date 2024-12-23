import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'

import { icons } from '@/constants/'

interface SearchInputProps {
  value?: string
  placeholder?: string
  containerStyle?: string
  inputStyle?: string
}

const SearchInput: React.FC<SearchInputProps> = (
  {
    value,
    placeholder,
    containerStyle,
    inputStyle,
  }
) => {
  return (
    <View className="flex flex-row items-center space-x-4 w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200">
      <TextInput
        className="text-base mt-0.5 text-white h-full w-full flex-1 font-pregular"
        value={value}
        placeholder="Search a video topic"
        placeholderTextColor="#CDCDE0"
      />
      <TouchableOpacity>
        <Image
          source={icons.search}
          style={{ width: 24, height: 24 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  )
}

export default SearchInput