import { ImageSourcePropType } from 'react-native'
import { icons } from '../constants'
export interface TabConfig {
  name: string
  title: string
  icon: ImageSourcePropType
}
export const TabsConfig = [
  {
    name: 'home',
    title: 'Home',
    icon: icons.home,
  },
  {
    name: 'bookmark',
    title: 'Bookmark',
    icon: icons.bookmark,
  },
  {
    name: 'create',
    title: 'Create',
    icon: icons.plus,
  },
  {
    name: 'profile',
    title: 'Profile',
    icon: icons.profile,
  },
]