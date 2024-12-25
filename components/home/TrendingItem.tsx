import { View, Text, TouchableOpacity, ImageBackground, Image, ListRenderItem } from 'react-native'
import React, { useState } from 'react'

import * as Animatable from 'react-native-animatable'
import { zoomIn, zoomOut } from '@/constants/trending_config'
import { icons } from '@/constants'
import { Video } from '@/models/Videos'

interface TrendingItemProps {
  activeItem: string
  item: Video
}

const TrendingItem: React.FC<TrendingItemProps> = ({ activeItem, item }) => {
  const [play, setPlay] = useState(false)
  return (
    <Animatable.View
      className="mr-5"
      animation={activeItem === item.$id ? zoomIn : zoomOut}
      duration={300}
    >
      {play ? (<Text className="text-white">
        Playing
      </Text>) : <TouchableOpacity className="relative justify-center items-center"
        activeOpacity={0.7}
        onPress={() => setPlay(true)}
      >
        <ImageBackground
          className="w-52 h-72 rounded-[35px] overflow-hidden shadow-lg shadow-black/40"
          source={{ uri: item.thumbnail }}
          resizeMode="cover"
        />
        <Image
          source={icons.play}
          className="absolute"
          resizeMode="contain"
          style={{ width: 50, height: 50 }}
        />
      </TouchableOpacity>}
    </Animatable.View>
  )
}

export default TrendingItem