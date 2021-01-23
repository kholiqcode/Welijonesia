import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ILBackground1, ILMotorDelivery } from '../../../assets';
import { WHITE } from '../../../styles';

const AuthContainer = ({ children }) => {
  const route = useRoute();
  return (
    <>
      <ImageBackground source={ILBackground1} style={styles.container}>
        <View>
          {route.name !== 'ChooseRole' && (
            <View style={styles.image}>
              <Image source={ILMotorDelivery} />
            </View>
          )}
          <View style={styles.component}>{children}</View>
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
    paddingHorizontal: 35,
    paddingVertical: 20,
    borderRadius: 50 / 2,
  },
});
