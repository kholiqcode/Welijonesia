import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { Provider, useSelector } from 'react-redux';
import { Loading } from './components';
import { store } from './modules';
import Router from './routes';
import { PRIMARY } from './styles';

const MainApp = () => {
  const { isLoading } = useSelector((state) => state.globalReducer);
  return (
    <NavigationContainer>
      <Router />
      <StatusBar showHideTransition="slide" barStyle="light-content" backgroundColor={PRIMARY} />
      <FlashMessage position="top" />
      {isLoading && <Loading />}
    </NavigationContainer>
  );
};
const App = () => (
  <Provider store={store}>
    <MainApp />
  </Provider>
);
export default App;
