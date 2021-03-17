import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ILNoPhoto } from '../../../assets';
import { FONT_REGULAR, PRIMARY, SECONDARY } from '../../../styles';

const OrderItem = ({ orderdetail }) => (
  <View style={styles.orderListItem}>
    <View style={styles.photoProductWrapper}>
      <Image source={ILNoPhoto} style={styles.photoProduct} />
    </View>
    <View style={styles.detailProductWrapper}>
      <Text style={styles.categoryProduct}>
        {orderdetail?.productdetail?.product?.comodity?.category?.name}
      </Text>
      <Text style={styles.nameProduct}>{orderdetail?.productdetail?.product?.comodity?.name}</Text>
      <Text style={styles.priceProduct}>Rp {orderdetail?.subtotal}</Text>
    </View>
    <View style={styles.totalOrder}>
      <Text style={styles.qtyProduct}>{orderdetail?.quantity}</Text>
    </View>
  </View>
);

export default OrderItem;

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
