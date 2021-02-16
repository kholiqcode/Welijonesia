import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ILNoPhoto } from '../../../assets';
import { FONT_MEDIUM, FONT_REGULAR, PRIMARY, SECONDARY, WHITE } from '../../../styles';
import { Gap } from '../../atoms';

const CardProduct = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('ProductDetailCustomer')}
    >
      <Text style={styles.categoryName}>Pokok</Text>
      <View style={styles.imageWrapper}>
        <Image source={ILNoPhoto} style={styles.productImage} />
      </View>
      <Text style={styles.productName}>Sayuran</Text>
      <Gap height={10} />
      <Text style={styles.productPrice} numberOfLines={1} ellipsizeMode="tail">
        Rp 100.000
      </Text>
      <Text style={styles.productUnit} numberOfLines={2} ellipsizeMode="tail">
        Tersedia /Kg/Pcs/Liter
      </Text>
    </TouchableOpacity>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  container: {
    width: '46%',
    backgroundColor: WHITE,
    padding: 10,
    borderRadius: 10 / 2,
    margin: 5,
  },
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    maxHeight: 100,
    maxWidth: 100,
  },
  categoryName: {
    color: WHITE,
    ...FONT_REGULAR(12),
    position: 'absolute',
    paddingHorizontal: 5,
    backgroundColor: PRIMARY,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  productName: {
    ...FONT_MEDIUM(12),
  },
  productPrice: {
    color: SECONDARY,
    ...FONT_MEDIUM(12),
  },
  productUnit: {
    color: SECONDARY,
    ...FONT_MEDIUM(10),
  },
});
