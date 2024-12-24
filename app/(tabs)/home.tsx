import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import HomeHeader from '@/components/home/HomeHeader'
import SearchInput from '@/components/SearchInput'
import EmptyState from '@/components/home/EmptyState'
import { getAllPosts } from '@/lib/appwrite'
import { Video } from '@/models/Videos'

const Home: React.FC = () => {
  const [data, setData] = useState<Video[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await getAllPosts();
        setData(response)
      } catch (error) {
        Alert.alert('Error', (error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData();
  }, [])

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = async () => {
    setRefreshing(true)
    // logic for recalling
    setRefreshing(false)
  }

  return (
    <SafeAreaView className="bg-primary border-2 h-full">
      <FlatList
        data={[{ $id: 1 }, { $id: 2 }, { $id: 3 }]}
        keyExtractor={(item: { $id: number }) => item.$id.toString()}
        renderItem={({ item }) => (
          <Text className='text-3xl text-white'>{item.$id}</Text>
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