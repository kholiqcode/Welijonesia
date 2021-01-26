import React, { useState } from 'react';

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ICChat, ICDownCircle, ICLink, ICUpCircle, ILNoPhoto } from '../../../assets';
import { FONT_MEDIUM, GRAY_DARK, GRAY_THIN, PRIMARY, WHITE } from '../../../styles';
import { Button, Gap } from '../../atoms';
import { OrderItem } from '../../molecules';

const CardOrder = () => {
  const [expand, setExpand] = useState(false);
  return (
    <View
      style={{
        borderRadius: 15,
        paddingHorizontal: 20,
        marginHorizontal: 10,
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
        <Text style={{ ...FONT_MEDIUM(10), color: WHITE }}>Diproses</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ ...FONT_MEDIUM(16), color: GRAY_DARK }}>#TRX0548484848484</Text>
          <Gap height={5} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={ILNoPhoto} style={{ height: 35, width: 35 }} />
            <Gap width={10} />
            <Text style={{ ...FONT_MEDIUM(16) }}>Pak Sukardi</Text>
          </View>
          <Text style={{ ...FONT_MEDIUM(12), marginTop: 10, color: GRAY_DARK }}>
            12 Januari 2020
          </Text>
        </View>
        {expand ? (
          <View style={styles.sellerNav}>
            <TouchableOpacity>
              <ICLink height={24} width={24} />
            </TouchableOpacity>
            <Gap width={15} />
            <TouchableOpacity>
              <ICChat height={24} width={24} />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={{ marginRight: 5 }} onPress={() => setExpand(true)}>
            <ICDownCircle height={40} width={40} />
          </TouchableOpacity>
        )}
      </View>

      {/* Content Section */}
      {expand && (
        <View>
          <View style={styles.sectionWrapper}>
            <Gap height={10} />
            <View style={styles.orderList}>
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
            </View>
          </View>
          <View style={styles.sectionWrapper}>
            <View style={styles.subTitleWrapper}>
              <Text style={styles.subTitle}>Pembayaran</Text>
            </View>
            <View style={styles.valueWrapper}>
              <Text>Cash/Tunai</Text>
            </View>
          </View>
          <View style={styles.sectionWrapper}>
            <View style={styles.subTitleWrapper}>
              <Text style={styles.subTitle}>Pengiriman</Text>
            </View>
            <View style={styles.valueWrapper}>
              <Text>COD</Text>
            </View>
          </View>
          <View style={styles.sectionWrapper}>
            <View style={styles.subTitleWrapper}>
              <Text style={styles.subTitle}>Alamat</Text>
            </View>
            <View>
              <Text numberOfLines={3}>
                Shinta Mauliantika, 082244016472, RT 003/RW 006, Desa Buduan Utara, Kec. Suboh, Kab.
                Situbondo
              </Text>
            </View>
          </View>
          <View style={styles.sectionTotalWrapper}>
            <Text style={styles.subTitle}>Total Pesanan</Text>
            <Text style={styles.subTitle}>Rp 100.000</Text>
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Button text="Batalkan Pesanan" danger />
          </View>
          <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => setExpand(false)}>
            <ICUpCircle height={40} width={40} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CardOrder;

const styles = StyleSheet.create({
  sectionWrapper: {
    paddingBottom: 8,
    borderBottomColor: GRAY_THIN,
    borderBottomWidth: 2,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitleWrapper: {
    justifyContent: 'center',
    paddingTop: 5,
  },
  valueWrapper: {
    height: 30,
    justifyContent: 'center',
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
