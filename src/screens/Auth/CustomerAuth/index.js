import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useState } from 'react';
import { AuthContainer, AuthTopTab } from '../../../components';
import Activation from './Activation';
import Login from './Login';
import Register from './Register';
import Forgot from './Forgot';

const TopTab = createMaterialTopTabNavigator();
const routesWithNoTabNavigator = ['Activation'];
TopTab.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  console.log(navigation);
  const currentRoute = navigation.state.routes[navigation.state.routes.length - 1].routeName;
  if (routesWithNoTabNavigator.includes(currentRoute)) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};
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

const CustomerAuth = () => {
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
      {!isActivation && isForgot && <Forgot handleSetForgot={handleSetActivation} />}
      {/* Activation Active */}
      {isActivation && !isForgot && <Activation handleSetActivation={handleSetActivation} />}
      {/* Auth Active */}
      {!isActivation && !isForgot && (
        <TopTabAuth handleSetActivation={handleSetActivation} handleSetForgot={handleSetForgot} />
      )}
    </AuthContainer>
  );
};

export default CustomerAuth;
