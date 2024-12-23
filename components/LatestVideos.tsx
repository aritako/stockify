import { View, Text } from 'react-native'
import React from 'react'

import Trending from './Trending'

const LatestVideos = () => {
  return (
    <View className="w-full flex-1">
      <Text className="text-gray-100 text-lg font-pregular mb-3">
        Latest Videos
      </Text>
      <Trending />
    </View>
  )
}

export default LatestVideos