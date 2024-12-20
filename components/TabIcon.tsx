import { View, Text, Image, ImageSourcePropType, ColorValue } from 'react-native'
import React from 'react'

interface TabIconProps {
  icon: ImageSourcePropType
  color: ColorValue
  name: string
  focused: boolean
}

const TabIcon: React.FC<TabIconProps> = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        style={{ width: 20, height: 20 }}
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style = {{color: color}}>
        {name}
      </Text>
    </View>
  )
}
export default TabIcon