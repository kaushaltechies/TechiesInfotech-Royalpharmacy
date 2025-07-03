import { Dimensions, Platform } from 'react-native';
import imagePath from '../constants/imagePath';

export const getResponsiveImage = (type: keyof typeof imagePath) => {
  const { width, height } = Dimensions.get('window');
  const isTablet = Platform.OS === 'ios' && Math.min(width, height) >= 768;

  if (!imagePath[type]) {
    console.warn(`Image type '${type}' not found in imagePath.`);
    return null;
  }

  if (Platform.OS === 'android') {
    return imagePath[type].android;
  }

  if (isTablet) {
    return imagePath[type].ipad;
  }

  return imagePath[type].ios;
};
