import { StyleSheet, Text, View } from 'react-native';
import { Slot, Stack } from 'expo-router';
import React from 'react';

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={options} />
    </Stack>
  );
};

export default RootLayout;

const options = {
  headerShown: false,
}