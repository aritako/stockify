import { View, Text, TouchableOpacity, ImageBackground, Image, ListRenderItem } from 'react-native'
import React, { useState } from 'react'
import { useVideoPlayer, VideoView } from 'expo-video';

import * as Animatable from 'react-native-animatable'
import { zoomIn, zoomOut } from '@/constants/trending_config'
import { icons } from '@/constants'
import { Video as VideoModel } from '@/models/Videos'

interface TrendingItemProps {
  activeItem: string
  item: VideoModel
}

const TrendingItem: React.FC<TrendingItemProps> = ({ activeItem, item }) => {
  const [play, setPlay] = useState(false)
  const player = useVideoPlayer(item.video, player => {
    player.loop = true;
    player.play();
  });
  return (
    <Animatable.View
      className="mr-5"
      animation={activeItem === item.$id ? zoomIn : zoomOut}
      duration={300}
    >
      {play ? (
        <VideoView
          className="w-52 h-72 rounded-[35px] overflow-hidden overflow-hidden shadow-lg shadow-black/40"
          player={player}
          style={{ width: 200, height: 300, borderRadius: 35 }}
          contentFit='cover'
          nativeControls
          showsTimecodes
        />
      ) : <TouchableOpacity className="relative justify-center items-center"
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