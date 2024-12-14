import { Text, View, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'
import TabIcon from '../../components/(tabs)/tab_icon'

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen name="home" options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }} />
      </Tabs>
    </>
  )
}

export default TabsLayout
