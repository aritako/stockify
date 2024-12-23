import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Video } from '@/models/Videos'

interface TrendingProps {
  posts: Video[]
}

const Trending: React.FC<TrendingProps> = ({ posts }) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item: Video) => item.$id.toString()}
      renderItem={({ item }) => (
        <Text className='text-3xl text-white'>{item.$id.toString()}</Text>
      )}
      horizontal
    />
  )
}

export default Trending