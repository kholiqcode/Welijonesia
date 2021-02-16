import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { FONT_BOLD, PRIMARY, scaleSize, WHITE } from '../../../styles';
import { Gap, Input } from '../../atoms';

const Header = ({ flat, title }) => (
  <View style={styles.container}>
    <Text style={styles.appTitle(title)}>{title ?? 'WELIJONESIA'}</Text>
    {!flat && (
      <View style={{ flex: 3 }}>
        <Input
          placeholder="Cari penjual atau sayur"
          variant="roundedPill"
          search
          rightIcon
          noBorder
          number
        />
      </View>
    )}
  </View>
);

export default Header;

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    backgroundColor: PRIMARY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    height: scaleSize(windowHeight * 0.1),
  },
  appTitle: (title) => ({
    ...FONT_BOLD(title ? 26 : 16),
    color: WHITE,
    paddingHorizontal: 10,
  }),
});
