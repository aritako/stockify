import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import SearchInput from './SearchInput'
import LatestVideos from './LatestVideos'

interface HomeHeaderProps {
  username: string
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ username = 'User' }) => {
  return (
    <View className="my-6 px-4 space-y-6">
      <View className="flex justify-between items-start flex-row mb-6">
        <View>
          <Text className="font-pmedium text-sm text-gray-100">
            Welcome Back
          </Text>
          <Text className="text-2xl font-psemibold text-white">
            {username}
          </Text>
        </View>

        <View className="mt-1.5">
          <Image
            source={images.logoSmall}
            style={{ width: 40, height: 40 }}
            resizeMode="contain"
          />
        </View>
      </View>
      <SearchInput
        placeholder="Search for a video topic"
      />
      <LatestVideos />
    </View>
  )
}

export default HomeHeader