import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CardStyleInterpolators } from '@react-navigation/stack';
import React from 'react';
import { BottomTabNavigator } from '../components';
import {
  Account,
  Address,
  Cart,
  ChangePassword,
  EditProfil,
  Home,
  Order,
  SellerDetail,
} from '../screens/Customer';

export const customerRoutes = [
  {
    name: 'SellerDetail',
    component: SellerDetail,
    options: {
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
    },
  },
  {
    name: 'EditProfilCustomer',
    component: EditProfil,
    options: {
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
    },
  },
  {
    name: 'ChangePasswordCustomer',
    component: ChangePassword,
    options: {
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
    },
  },
  {
    name: 'AddressCustomer',
    component: Address,
    options: {
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
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
