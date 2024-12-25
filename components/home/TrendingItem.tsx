import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React, { useState } from 'react'

import * as Animatable from 'react-native-animatable'
import { zoomIn, zoomOut } from '@/constants/trending_config'
import { icons } from '@/constants'

interface TrendingItemProps {
  activeItem: any
  item: any
}

const sample = {
  0: {
    transform: [{ scale: 0.9 }],
  },
  1: {
    transform: [{ scale: 1 }],
  },
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