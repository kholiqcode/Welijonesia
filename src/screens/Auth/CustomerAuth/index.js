import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useState } from 'react';
import { AuthContainer, AuthTopTab } from '../../../components';
import Forgot from './Forgot';
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

const CustomerAuth = (props) => {
  const [isForgot, setIsForgot] = useState(false);
  const handleSetForgot = (value) => {
    setIsForgot(value);
  };

  return (
    <AuthContainer>
      {/* Forgot Active */}
      {isForgot && <Forgot handleSetForgot={handleSetForgot} {...props} />}
      {/* Auth Active */}
      {!isForgot && <TopTabAuth handleSetForgot={handleSetForgot} {...props} />}
    </AuthContainer>
  );
};

export default CustomerAuth;
