import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ILNoPhoto } from '../../../assets';
import { FONT_MEDIUM, FONT_REGULAR, PRIMARY, SECONDARY, WHITE } from '../../../styles';
import { convertCurrency } from '../../../utilities';
import { Gap } from '../../atoms';

const CardProduct = ({ product }) => {
  const navigation = useNavigation();
  const _productUnit = product.productdetails.map(
    (productDetail) => productDetail.productunit.name,
  );
  const _priceHigh = Math.min.apply(
    null,
    product.productdetails.map((item) => item.price),
  );
  const _priceLow = Math.max.apply(
    null,
    product.productdetails.map((item) => item.price),
  );
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('ProductDetailCustomer')}
    >
      <Text style={styles.categoryName}>Pokok</Text>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: product.comodity.picturePath }} style={styles.productImage} />
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <Gap height={5} />
        <Text style={styles.productName}>{product.comodity.name}</Text>
        <Gap height={10} />
        <Text style={styles.productPrice} numberOfLines={1} ellipsizeMode="tail">
          {_priceHigh === _priceLow
            ? convertCurrency(_priceLow)
            : `${convertCurrency(_priceLow)} - ${convertCurrency(_priceHigh)}`}
        </Text>
        {_productUnit.length > 0 && (
          <Text style={styles.productUnit} numberOfLines={2} ellipsizeMode="tail">
            Tersedia {_productUnit.join('/')}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  container: {
    width: '46%',
    backgroundColor: WHITE,
    borderRadius: 10 / 2,
    margin: 5,
  },
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: '100%',
    aspectRatio: 1,
    borderTopRightRadius: 10 / 2,
    borderTopLeftRadius: 10 / 2,
  },
  categoryName: {
    color: WHITE,
    ...FONT_REGULAR(12),
    position: 'absolute',
    paddingHorizontal: 5,
    backgroundColor: PRIMARY,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    zIndex: 1,
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
