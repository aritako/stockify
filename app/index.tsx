import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { Image, ScrollView, View, Text } from 'react-native';
import { images } from '@/constants';
export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            style={{ width: 120 }}
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            style={{ width: '100%', height: 300 }}
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{' '}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="absolute -bottom-1 -right-8"
              style={{ width: 200, height: 15 }}
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7">
            Where creativity meets innovation.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
