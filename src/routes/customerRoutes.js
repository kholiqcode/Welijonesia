import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { BottomTabNavigator } from '../components';
import { Account, Cart, Home, Order, SellerDetail } from '../screens/Customer';

export const customerRoutes = [
  {
    name: 'SellerDetail',
    component: SellerDetail,
    options: {
      headerShown: false,
    },
  },
];

// Customer BottomTabNavigator
const Tab = createBottomTabNavigator();

const customerTabRoutes = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Order',
    component: Order,
  },
  {
    name: 'Cart',
    component: Cart,
  },
  {
    name: 'Account',
    component: Account,
  },
];

export const CustomerMainScreen = () => (
  <Tab.Navigator tabBar={(props) => <BottomTabNavigator {...props} />}>
    {customerTabRoutes.map((route, index) => (
      <Tab.Screen key={index} {...route} />
    ))}
  </Tab.Navigator>
);
