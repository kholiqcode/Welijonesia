import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ILLogo } from '../../assets';
import { FONT_MEDIUM, FONT_REGULAR, GREEN_LIGHT, GREEN_MEDIUM, WHITE } from '../../styles';

export default function Splash() {
  return (
    <LinearGradient colors={[GREEN_LIGHT, GREEN_MEDIUM]} style={styles.screen}>
      <Image source={ILLogo} />
      <Text style={styles.textAppName}>WELIJONESIA</Text>
      <Text style={styles.textAppDesc}>Sayur segar dalam genggamanmu</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAppName: {
    color: WHITE,
    marginTop: 12,
    ...FONT_MEDIUM(20),
  },
  textAppDesc: {
    color: WHITE,
    marginTop: 24,
    ...FONT_REGULAR(16),
  },
});
