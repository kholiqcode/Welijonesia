import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DummyKangkung, ICChat, ICLink, ILNoPhoto } from '../../../assets';
import { Gap, Header } from '../../../components';
import { FONT_MEDIUM, GRAY_THIN, PRIMARY, WHITE } from '../../../styles';

const ProductDetail = () => (
  <View style={styles.container}>
    <Header />
    <Image source={DummyKangkung} style={styles.productImage} />
    <View style={styles.productInfo}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginRight: 10,
        }}
      >
        <View>
          <Text style={styles.txtCategory}>Pokok</Text>
          <Gap height={2} />
          <Text style={styles.txtProductName}>Gula</Text>
        </View>
        <Text style={styles.txtProductPrice}>Rp 13.500</Text>
      </View>
      <Gap height={5} />
      <Text style={styles.txtProductDesc}>
        Silahkan di pesan sesuai satuan yang ada ya, lijo reza. terimakasih sudah berbelanja
      </Text>
      <Gap height={5} />

      <Gap height={10} style={{ borderBottomColor: GRAY_THIN, borderBottomWidth: 2 }} />

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
            <Text style={{ ...FONT_MEDIUM(16) }}>Pak Sukardi</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <TouchableOpacity>
            <ICLink height={24} width={24} />
          </TouchableOpacity>
          <Gap width={15} />
          <TouchableOpacity>
            <ICChat height={24} width={24} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productImage: {
    height: '30%',
  },
  productInfo: {
    flex: 1,
    backgroundColor: WHITE,
    marginTop: -30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  txtCategory: {
    ...FONT_MEDIUM(14),
  },
  txtProductName: {
    ...FONT_MEDIUM(18),
  },
  txtProductPrice: {
    ...FONT_MEDIUM(18),
  },
  txtProductDesc: {
    ...FONT_MEDIUM(14),
  },
});
