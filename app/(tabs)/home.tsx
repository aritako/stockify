import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeHeader from '@/components/HomeHeader'
import SearchInput from '@/components/SearchInput'

const Home = () => {
  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        data={[{ $id: 1 }, { $id: 2 }, { $id: 3 }]}
        keyExtractor={(item: { $id: number }) => item.$id.toString()}
        renderItem={({ item }) => (
          <Text className='text-3xl text-white'>{item.$id}</Text>
        )}
        ListHeaderComponent={() => (
          <HomeHeader username="User" />
        )}
      >
      </FlatList>

    </SafeAreaView>
  )
}

export default Home