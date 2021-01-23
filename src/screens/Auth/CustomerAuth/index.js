import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { AuthContainer, AuthTopTab } from '../../../components';
import Login from './Login';
import Register from './Register';

const TopTab = createMaterialTopTabNavigator();
const TopTabAuth = (props) => {
  const LoginTab = () => <Login {...props} />;
  const RegisterTab = () => <Register {...props} />;

  return (
    <TopTab.Navigator tabBar={(props) => <AuthTopTab {...props} />}>
      <TopTab.Screen name="LOGIN" component={LoginTab} />
      <TopTab.Screen name="REGISTER" component={RegisterTab} />
    </TopTab.Navigator>
  );
};
const CustomerAuth = () => (
  <AuthContainer>
    <TopTabAuth />
  </AuthContainer>
);

export default CustomerAuth;
