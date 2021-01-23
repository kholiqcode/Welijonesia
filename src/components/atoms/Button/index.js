import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FONT_REGULAR, GREEN_DARK, PRIMARY, RED, SECONDARY, WHITE } from '../../../styles';

const Button = ({ text, onPress, variant, primary, secondary, danger, greenDark }) => {
  let bgColor = PRIMARY;
  let txtColor = WHITE;
  let radius = 30 / 2;
  switch (variant) {
    case 'roundedPill':
      radius = 30;
      break;
    default:
      radius = 30 / 2;
      break;
  }

  if (primary) {
    bgColor = PRIMARY;
    txtColor = WHITE;
  } else if (secondary) {
    bgColor = SECONDARY;
    txtColor = WHITE;
  } else if (danger) {
    bgColor = RED;
    txtColor = WHITE;
  } else if (greenDark) {
    bgColor = GREEN_DARK;
    txtColor = WHITE;
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.container(bgColor, radius)}>
      <Text style={styles.buttonText(txtColor)}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: (bgColor, radius) => ({
    backgroundColor: bgColor,
    borderRadius: radius,
    paddingVertical: 8,
    justifyContent: 'center',
  }),
  buttonText: (txtColor) => ({
    textAlign: 'center',
    ...FONT_REGULAR(14),
    color: txtColor,
  }),
});

export default Button;
