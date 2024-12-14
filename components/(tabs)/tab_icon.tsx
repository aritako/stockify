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
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-2 h-2"
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}>
        {name}
      </Text>
    </View>
  )
}
export default TabIcon