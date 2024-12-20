import { Text, View, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'
import TabIcon from '../../components/TabIcon'
import { TabsConfig, TabConfig } from '../../constants/tabs_config'
const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFA001',
          tabBarInactiveTintColor: '#CDCDE0',
          tabBarStyle: {
            backgroundColor: '#161522',
            borderTopWidth: 1,
            borderTopColor: '#232533',
          }
        }}
      >
        {TabsConfig.map((tab: TabConfig) => (
          <Tabs.Screen key={tab.name} name={tab.name} options={{
            title: tab.title,
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={tab.icon}
                color={color}
                name={tab.title}
                focused={focused}
              />
            ),
          }} />
        ))}


      </Tabs>


    </>
  )
}

export default TabsLayout
