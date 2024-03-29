import { useNavigation } from '@react-navigation/native';
import React, { memo } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { ILNoPhoto } from '../../../assets';
import { FONT_MEDIUM, GRAY_THIN, PRIMARY, WHITE } from '../../../styles';
import { Button, Gap, Input } from '../../atoms';
import { CartItem } from '../../molecules';

const CardCart = ({
  handleSelect,
  paymentMethod,
  shipping,
  address,
  onPress,
  handleDeleteCart,
}) => {
  const { cart } = useSelector((state) => state.cartReducer);
  const navigation = useNavigation();
  return (
    <View
      style={{
        borderRadius: 15,
        paddingHorizontal: 20,
        backgroundColor: WHITE,
        paddingVertical: 10,
      }}
    >
      <View
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          padding: 7,
          backgroundColor: PRIMARY,
          borderBottomStartRadius: 15,
          borderTopEndRadius: 15,
        }}
      >
        <Text style={{ ...FONT_MEDIUM(10), color: WHITE }}>{cart?.seller?.type}</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 20,
          borderBottomColor: GRAY_THIN,
          borderBottomWidth: 2,
        }}
      >
        <View
          style={{
            justifyContent: 'space-between',
          }}
        >
          <Gap height={5} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={ILNoPhoto} style={{ height: 35, width: 35 }} />
            <Gap width={10} />
            <Text style={{ ...FONT_MEDIUM(16) }}>{cart?.seller?.name}</Text>
          </View>
        </View>
        <View style={styles.sellerNav}>
          <Button
            btnIcon="link"
            onPress={() => navigation.navigate('SellerDetail', { id: cart?.seller?.id })}
          />
          <Gap width={15} />
          <Button
            btnIcon="chat"
            onPress={() => navigation.navigate('SellerDetail', { id: cart?.seller?.id })}
          />
        </View>
      </View>

      {/* Content Section */}
      <View>
        <View style={styles.sectionWrapper}>
          <Gap height={10} />
          <View style={styles.orderList}>
            {cart?.cartdetails?.map((item, index) => (
              <CartItem
                cartItem={item}
                key={index.toString()}
                handleDeleteCart={handleDeleteCart}
              />
            ))}
          </View>
        </View>
        <View style={styles.sectionWrapper}>
          <View style={styles.subTitleWrapper}>
            <Text style={styles.subTitle}>Pembayaran</Text>
          </View>
          <View style={styles.valueWrapper}>
            {/* <Text style={styles.txtValue}>Pilih Pembayaran</Text> */}
            <TouchableOpacity style={{ flex: 1 }} onPress={() => handleSelect('paymentMethod')}>
              <Input
                placeholder="Pilih Pembayaran"
                select
                rightIcon
                disable
                noBorder
                onPress={() => handleSelect('paymentMethod')}
                value={paymentMethod.name}
              />
            </TouchableOpacity>
            {/* <TouchableOpacity style={{ marginRight: 5 }} onPress={() => setExpand(true)}>
              <ICDownCircle height={30} width={30} />
            </TouchableOpacity> */}
          </View>
        </View>
        <View style={styles.sectionWrapper}>
          <View style={styles.subTitleWrapper}>
            <Text style={styles.subTitle}>Pengiriman</Text>
          </View>
          <View style={styles.valueWrapper}>
            {/* <Text style={styles.txtValue}>Pilih Pengiriman</Text>
            <TouchableOpacity style={{ marginRight: 5 }} onPress={() => setExpand(true)}>
              <ICDownCircle height={30} width={30} />
            </TouchableOpacity> */}
            <TouchableOpacity style={{ flex: 1 }} onPress={() => handleSelect('shipping')}>
              <Input
                placeholder="Pilih Pengiriman"
                value={shipping === 0 ? 'Diantar' : shipping === 1 ? 'Ambil Sendiri' : ''}
                select
                rightIcon
                disable
                onPress={() => handleSelect('shipping')}
                noBorder
              />
            </TouchableOpacity>
          </View>
        </View>
        {shipping === 0 && (
          <View style={styles.sectionWrapper}>
            <View style={styles.subTitleWrapper}>
              <Text style={styles.subTitle}>Alamat</Text>
            </View>
            <View style={styles.valueWrapper}>
              <TouchableOpacity style={{ flex: 1 }} onPress={() => handleSelect('address')}>
                <Input
                  placeholder="Pilih Alamat"
                  select
                  rightIcon
                  disable
                  noBorder
                  value={address?.address ?? ''}
                  onPress={() => handleSelect('address')}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}

        <Gap height={10} />
        <View style={styles.sectionTotalWrapper}>
          <Text style={styles.subTitle}>Total Pesanan</Text>
          <Text style={styles.subTitle}>Rp {cart.total}</Text>
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Button text="Pesan Sekarang" onPress={onPress} />
        </View>
      </View>
    </View>
  );
};

export default memo(CardCart);

const styles = StyleSheet.create({
  sectionWrapper: {
    paddingBottom: 8,
    borderBottomColor: GRAY_THIN,
    borderBottomWidth: 2,
    paddingTop: 5,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitleWrapper: {
    justifyContent: 'center',
  },
  valueWrapper: {
    paddingVertical: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '100%',
  },
  txtValue: {
    ...FONT_MEDIUM(12),
    maxWidth: '80%',
  },
  sectionTotalWrapper: {
    paddingBottom: 8,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  sellerWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: WHITE,
  },
  sellerProfil: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sellerPhoto: {
    height: 35,
    width: 35,
  },
  sellerNav: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' },
  sellerNavBtn: {
    backgroundColor: '#BFFCBF',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 30 / 2,
    width: 80,
    alignItems: 'center',
  },
  sellerNavLabel: {
    fontSize: 12,
  },
});
