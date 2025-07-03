import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationStrings from './navigationStrings';
import CustomTabBar from './CustomTabBar';
import HomeScreen from '../screens/home/HomeScreen';
import Categories from '../screens/categories/Categories';
import Wishlist from '../screens/wishlist/Wishlist';
import Cart from '../screens/cart/Cart';
import Profile from '../screens/profile/Profile';

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen name={navigationStrings.HOME} component={HomeScreen} />
      <Tab.Screen name={navigationStrings.WISHLIST} component={Wishlist} />
      <Tab.Screen name={navigationStrings.CATEGORIES} component={Categories} />
      <Tab.Screen name={navigationStrings.CART} component={Cart} />
      <Tab.Screen name={navigationStrings.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
