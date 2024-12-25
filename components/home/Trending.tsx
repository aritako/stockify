import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Video } from '@/models/Videos'
import TrendingItem from './TrendingItem'

interface TrendingProps {
  posts: Video[]
}

const Trending: React.FC<TrendingProps> = ({ posts }) => {
  const [activeItem, setActiveItem] = useState(posts[0])
  return (
    <FlatList
      data={posts}
      keyExtractor={(item: Video) => item.$id.toString()}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      horizontal
    />
  )
}

export default Trending