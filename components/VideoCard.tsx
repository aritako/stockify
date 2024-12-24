import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Video } from '@/models/Videos'
import { icons } from '@/constants'

interface VideoCardProps {
  videoItem: Video
}

const VideoCard: React.FC<VideoCardProps> = ({ videoItem }) => {
  const { title, thumbnail, video, creator } = videoItem
  const { username, avatar } = creator

  const [play, setPlay] = useState(false)
  return (
    <View className="flex flex-col px-4 mb-14">
      <View className="flex flex-row gap-3 items-start">
        <View className="flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border 
          border-secondary flex justify-center items-center p-0.5">
            <Image
              className="w-full h-full rounded-lg"
              resizeMode='cover'
              source={{ uri: avatar }}
            />
          </View>
          <View className="flex justify-center flex-1 ml-3 gap-y-1">
            <Text className="text-white font-psemibold text-sm" numberOfLines={1}>
              {title}
            </Text>
            <Text className="text-xs text-gray-100 font-pregular" numberOfLines={1}>
              {username}
            </Text>
          </View>
        </View>

        <View className="pt-2">
          <Image source={icons.menu}
            resizeMode='contain'
            style={{ width: 20, height: 20 }}
          />
        </View>
      </View>
      {play ? (
        <Text className="text-white">Playing</Text>
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          className="w-full h-60 rounded-xl mt-3 relative justify-center items-center"
          onPress={() => setPlay(true)}
        >
          <Image
            className="w-full h-full rounded-xl mt-3"
            resizeMode='cover'
            source={{ uri: thumbnail }}
          />
          <Image
            source={icons.play}
            className="absolute"
            resizeMode="cover"
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default VideoCard