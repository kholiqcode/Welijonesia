import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  ICAccount,
  ICAccountActive,
  ICCart,
  ICCartActive,
  ICHome,
  ICHomeActive,
  ICOrder,
  ICOrderActive,
} from '../../../assets';
import { FONT_REGULAR, GRAY_DARK, PRIMARY } from '../../../styles';

const TabItem = ({ title, active, onPress, onLongPress }) => {
  const Icon = () => {
    if (title === 'Account') {
      return active ? (
        <ICAccountActive height={24} width={24} />
      ) : (
        <ICAccount height={24} width={24} />
      );
    }
    if (title === 'Order') {
      return active ? <ICOrderActive height={24} width={24} /> : <ICOrder height={24} width={24} />;
    }
    if (title === 'Cart') {
      return active ? <ICCartActive height={24} width={24} /> : <ICCart height={24} width={24} />;
    }
    return active ? <ICHomeActive height={24} width={24} /> : <ICHome height={24} width={24} />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  text: (active) => ({
    ...FONT_REGULAR(10),
    color: active ? PRIMARY : GRAY_DARK,
    marginTop: 2,
  }),
});
