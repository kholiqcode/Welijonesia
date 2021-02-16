import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import authRoutes from './authRoutes';
import { CustomerMainScreen, customerRoutes } from './customerRoutes';

const Stack = createStackNavigator();

const Router = () => (
  <Stack.Navigator initialRouteName="Splash">
    {authRoutes.map((route, index) => (
      <Stack.Screen key={index} {...route} />
    ))}
    {customerRoutes.map((route, index) => (
      <Stack.Screen key={index} {...route} />
    ))}
    <Stack.Screen
      name="CustomerMainScreen"
      component={CustomerMainScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default Router;
