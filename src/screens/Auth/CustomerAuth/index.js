import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useState } from 'react';
import { AuthContainer, AuthTopTab } from '../../../components';
import Activation from './Activation';
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
  const [isActivation, setIsActivation] = useState(false);
  const [isForgot, setIsForgot] = useState(false);

  const handleSetActivation = (value) => {
    setIsActivation(value);
    setIsForgot(false);
  };
  const handleSetForgot = (value) => {
    setIsActivation(false);
    setIsForgot(value);
  };

  return (
    <AuthContainer>
      {/* Forgot Active */}
      {!isActivation && isForgot && <Forgot handleSetForgot={handleSetActivation} {...props} />}
      {/* Activation Active */}
      {isActivation && !isForgot && (
        <Activation handleSetActivation={handleSetActivation} {...props} />
      )}
      {/* Auth Active */}
      {!isActivation && !isForgot && (
        <TopTabAuth
          handleSetActivation={handleSetActivation}
          handleSetForgot={handleSetForgot}
          {...props}
        />
      )}
    </AuthContainer>
  );
};

export default CustomerAuth;
