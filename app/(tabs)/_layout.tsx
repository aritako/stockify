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
