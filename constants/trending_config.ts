import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import * as Animatable from 'react-native-animatable';

export const zoomIn = {
  0: {
    scale: 0.9
  },
  1: {
    scale: 1,
  }
} as Animatable.CustomAnimation<ViewStyle & TextStyle & ImageStyle>

export const zoomOut = {
  0: {
    scale: 1
  },
  1: {
    scale: 0.9,
  }
} as Animatable.CustomAnimation<ViewStyle & TextStyle & ImageStyle>