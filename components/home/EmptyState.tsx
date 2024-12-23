import { View, Text, Image } from 'react-native'
import React from 'react'

import { images } from '@/constants'
import CustomButton from '../CustomButton'
import { router } from 'expo-router'

interface EmptyStateProps {
  title: string
  subtitle: string
}

const EmptyState: React.FC<EmptyStateProps> = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        style={{ width: 200, height: 200 }}
        resizeMode='contain'
      />
      <Text className="font-pmedium text-xl text-gray-100 text-center mt-2">{title}</Text>
      <Text className="font-pmedium text-sm text-gray-100">{subtitle}</Text>
      <CustomButton
        title="Create Video"
        handlePress={() => { router.push('/create') }}
        containerStyle='w-full my-5'
      />
    </View >
  )
}

export default EmptyState