import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { ILBackground1, ILMotorDelivery } from '../../../assets';
import { WHITE } from '../../../styles';

const AuthContainer = ({ children }) => {
  const route = useRoute();
  const [motorAnimate, setMotorAnimate] = useState(new Animated.Value(0));

  const runMotor = () => {
    Animated.timing(motorAnimate, {
      toValue: 220,
      duration: 5000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start(() => setMotorAnimate(new Animated.Value(0)));
  };

  const positionStyle = {
    transform: [{ translateX: motorAnimate }],
  };

  useEffect(() => {
    runMotor();
    console.log('useEffect');
  }, []);
  return (
    <>
      <ImageBackground source={ILBackground1} style={styles.container}>
        <View>
          {route.name !== 'ChooseRole' && (
            <View style={styles.image}>
              <Animated.Image source={ILMotorDelivery} style={[positionStyle]} />
            </View>
          )}
          <ScrollView showsVerticalScrollIndicator={false} style={styles.component}>
            {children}
          </ScrollView>
        </View>
      </ImageBackground>
    </>
  );
};

export default AuthContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    justifyContent: 'center',
  },
  image: {
    paddingLeft: 10,
    marginBottom: -2,
  },
  component: {
    backgroundColor: WHITE,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 50 / 2,
  },
});
