import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ILNoPhoto } from '../../../assets';
import { FONT_MEDIUM, FONT_REGULAR, PRIMARY, RED, scaleSize, WHITE } from '../../../styles';
import { Gap } from '../../atoms';

const CardProduct = ({ onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.topLabel}>
      <Text style={styles.typeSeller} numberOfLines={1}>
        Keliling
      </Text>
    </View>
    <Gap height={12} />
    <View style={styles.imageWrapper}>
      <Image source={ILNoPhoto} style={styles.productImage} />
    </View>
    <Text style={styles.sellerName}>Sugiono</Text>

    <Gap height={10} />
    <Text style={styles.sellerAddress} numberOfLines={2} ellipsizeMode="tail">
      {/* {rute.join(' => ')} */}
      Perum Mastrip - Cluster Tidar - Bunga NirwanaPerum Mastrip - Cluster Tidar - Bunga Nirwana
    </Text>
  </TouchableOpacity>
);

export default CardProduct;

const styles = StyleSheet.create({
  container: {
    width: '48%',
    backgroundColor: WHITE,
    marginTop: 5,
    padding: 10,
    borderRadius: 10 / 2,
  },
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    maxHeight: scaleSize(120),
    maxWidth: scaleSize(120),
  },
  typeSeller: {
    color: WHITE,
    ...FONT_REGULAR(12),
  },
  sellerName: {
    ...FONT_MEDIUM(12),
  },
  sellerAddress: {
    color: RED,
    ...FONT_REGULAR(10),
  },
  topLabel: {
    position: 'absolute',
    backgroundColor: PRIMARY,
    top: 0,
    left: 0,
    padding: 3,
    borderBottomRightRadius: 10 / 2,
    borderTopLeftRadius: 10 / 2,
  },
});
