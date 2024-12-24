import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import HomeHeader from '@/components/home/HomeHeader'
import SearchInput from '@/components/SearchInput'
import EmptyState from '@/components/home/EmptyState'
import { getAllPosts } from '@/lib/appwrite'
import fetchData from '@/lib/fetchData'
import VideoCard from '@/components/VideoCard'
import { Video } from '@/models/Videos'

const Home: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false)
  const { data: posts, isLoading, refetch } = fetchData(getAllPosts)
  const onRefresh = async () => {
    setRefreshing(true)
    await refetch()
    setRefreshing(false)
  }

  return (
    <SafeAreaView className="bg-primary border-2 h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id.toString()}
        renderItem={({ item }) => (
          <VideoCard videoItem={item as Video} />
        )}
        ListHeaderComponent={() => (
          <HomeHeader username="User" />
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No videos found."
            subtitle="Be the first one to upload a video!"
          />
        )
        }
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
      </FlatList>
    </SafeAreaView>
  )
}

export default Home