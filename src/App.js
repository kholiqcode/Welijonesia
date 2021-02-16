import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import 'react-native-gesture-handler';
import Router from './routes';

const MainApp = () => (
  // const { isLoading } = useSelector((state) => state.globalReducer);
  <NavigationContainer>
    <Router />
    <FlashMessage position="top" />
    {/* {isLoading && <Loading />} */}
  </NavigationContainer>
);
const App = () => (
  // <Provider store={store}>
  <MainApp />
  // </Provider>
);
export default App;
