import { StyleSheet, Text, View } from 'react-native';
import { Slot, SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import React, { useEffect } from 'react';
import "../global.css";
import GlobalProvider from '@/context/GlobalProvider';
import fonts from '@/constants/fonts';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts(fonts);

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;
  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name="index" options={options} />
        <Stack.Screen name="(auth)" options={options} />
        <Stack.Screen name="(tabs)" options={options} />
        {/* <Stack.Screen name="/search/[query]" options={options} /> */}
      </Stack>
    </GlobalProvider>
  );
};

export default RootLayout;

const options = {
  headerShown: false,
}