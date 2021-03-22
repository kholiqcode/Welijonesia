import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CardStyleInterpolators } from '@react-navigation/stack';
import React from 'react';
import { BottomTabNavigator } from '../components';
import {
  Account,
  AddAddress,
  Address,
  Cart,
  ChangePassword,
  EditProfil,
  Home,
  Order,
  ProductDetail,
  Search,
  SellerDetail,
} from '../screens/Customer';

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress.interpolate({
      inputRange: [0, 0.5, 0.9, 1],
      outputRange: [0, 0.25, 0.7, 1],
    }),
  },
});

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
  {
    name: 'AddAddressCustomer',
    component: AddAddress,
    options: {
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
    },
  },
  {
    name: 'ProductDetailCustomer',
    component: ProductDetail,
    options: {
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
    },
  },
  {
    name: 'SearchCustomer',
    component: Search,
    options: {
      headerShown: false,
      cardStyleInterpolator: forFade,
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
