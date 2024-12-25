import { View, Text, FlatList, ListRenderItem, ViewToken } from 'react-native'
import React, { useRef, useState } from 'react'
import { Video } from '@/models/Videos'
import TrendingItem from './TrendingItem'
import { set } from 'zod'

interface TrendingProps {
  posts: Video[]
}

const Trending: React.FC<TrendingProps> = ({ posts }) => {
  const [activeItem, setActiveItem] = useState<string>(posts[0].$id)

  const viewableItemsChanged = ({ viewableItems }: { viewableItems: any }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
    }
  }
  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig: { itemVisiblePercentThreshold: 70 }, onViewableItemsChanged: viewableItemsChanged },
  ]);
  return (
    <FlatList
      data={posts}
      keyExtractor={(item: Video) => item.$id}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      viewabilityConfigCallbackPairs={
        viewabilityConfigCallbackPairs.current
      }
      viewabilityConfig={{ itemVisiblePercentThreshold: 70 }}
      horizontal
    />
  )
}

export default Trending