import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { ILNoPhoto } from '../../../assets';
import { deleteCart } from '../../../services';
import { FONT_REGULAR, PRIMARY, SECONDARY } from '../../../styles';
import { Button, Counter } from '../../atoms';

const CartItem = ({ counter, cartItem, handleDeleteCart }) => (
  <View style={styles.orderListItem}>
    <View style={styles.photoProductWrapper}>
      <Image source={ILNoPhoto} style={styles.photoProduct} />
    </View>
    <View style={styles.detailProductWrapper}>
      <Text style={styles.categoryProduct}>
        {cartItem?.productdetail?.product?.comodity?.category?.name}
      </Text>
      <Text style={styles.nameProduct}>{cartItem?.productdetail?.product?.comodity?.name}</Text>
      <Text style={styles.priceProduct}>
        Rp {cartItem?.productdetail?.price}/{cartItem?.productdetail?.productunit?.name}
      </Text>
    </View>
    <View style={styles.totalOrder}>
      {counter ? (
        <Counter />
      ) : (
        <Text style={styles.qtyProduct}>
          {cartItem.quantity}/{cartItem?.productdetail?.productunit?.name}
        </Text>
      )}
    </View>
    <Button btnIcon="trash" onPress={() => handleDeleteCart(cartItem?.id)} />
  </View>
);

export default CartItem;

const styles = StyleSheet.create({
  orderListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  photoProduct: {
    height: 35,
    width: 35,
  },
  photoProductWrapper: {
    flex: 0.7,
    justifyContent: 'center',
  },
  detailProductWrapper: {
    flex: 2,
    justifyContent: 'space-between',
  },
  totalOrder: {
    flex: 1,
    alignItems: 'center',
  },
  nameProduct: {
    color: PRIMARY,
    ...FONT_REGULAR(14),
  },
  categoryProduct: {
    color: SECONDARY,
    ...FONT_REGULAR(12),
  },
  priceProduct: {
    color: SECONDARY,
    ...FONT_REGULAR(12),
  },
  qtyProduct: {
    color: SECONDARY,
    ...FONT_REGULAR(12),
  },
});
