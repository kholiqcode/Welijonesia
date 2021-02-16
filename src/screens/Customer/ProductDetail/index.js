import React from 'react';
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Rating } from 'react-native-ratings';
import { DummyKangkung, ICBackActive, ICChat, ICLink, ICMarker, ILNoPhoto } from '../../../assets';
import { Button, Gap } from '../../../components';
import {
  boxShadow,
  FONT_BOLD,
  FONT_MEDIUM,
  FONT_REGULAR,
  GRAY_DARK,
  GRAY_LIGHT,
  GRAY_THIN,
  PRIMARY,
  SECONDARY,
  WHITE,
} from '../../../styles';

const ProductDetail = ({ navigation }) => (
  <>
    <StatusBar translucent backgroundColor="transparent" />
    <View style={styles.container}>
      {/* <Header /> */}
      <Image source={DummyKangkung} style={styles.productImage} />
      <View style={styles.productInfo}>
        <View style={styles.productDetail}>
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
      <FlatList
        style={styles.ratingWrapper}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        stickyHeaderIndices={[0]}
        scrollEnabled
        data={[0, 1, 2, 3, 4, 5]}
        ListHeaderComponent={() => (
          <View style={styles.ratingHeader}>
            <Text style={styles.ratingTitle}>Rating dan Ulasan</Text>
            <Button btnIcon="right" />
          </View>
        )}
        contentContainerStyle={{ paddingBottom: '8%' }}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 15 }}>
            <View style={styles.customerProfil}>
              <Image source={ILNoPhoto} style={styles.customerPhoto} />
              <Text style={styles.customerName}>Dinda</Text>
            </View>
            <Gap height={6} />
            <View style={styles.customerRate}>
              <Rating ratingCount={5} startingValue={3} imageSize={15} readonly fractions={2} />
              <Text style={styles.customerDateRate}>12/20/2020</Text>
            </View>
            <Gap height={6} />
            <View>
              <Text style={styles.textCustomerReview} numberOfLines={2} ellipsizeMode="tail">
                Halo
              </Text>
            </View>
          </View>
        )}
      />
    </View>

    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <ICBackActive height="30" width="30" />
    </TouchableOpacity>
    <View
      style={{
        // backgroundColor: 'red',
        flexDirection: 'row',
        width: '100%',
        bottom: 0,
        height: '7%',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
      }}
    >
      <Gap width={10} />
      <TouchableOpacity
        style={{
          backgroundColor: PRIMARY,
          flex: 1,
          ...boxShadow(GRAY_LIGHT, { height: 3, width: 2 }, 3, 1),
          borderRadius: 10,
        }}
      >
        <Text style={{ textAlign: 'center', ...FONT_BOLD(18), paddingVertical: 7, color: WHITE }}>
          Pesan Sekarang
        </Text>
      </TouchableOpacity>
      <Gap width={10} />
      <TouchableOpacity
        style={{
          alignItems: 'center',
          backgroundColor: WHITE,
          width: 45,
          paddingVertical: 7,
          ...boxShadow(GRAY_LIGHT, { height: 3, width: 2 }, 3, 1),
          borderRadius: 10,
        }}
      >
        <ICMarker height={25} width={25} />
      </TouchableOpacity>
      <Gap width={10} />
    </View>
  </>
);

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
  },
  backButton: {
    position: 'absolute',
    height: 40,
    width: 40,
    borderRadius: 15,
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    top: 10 + StatusBar.currentHeight,
    left: 10,
    ...boxShadow(GRAY_DARK, { height: 2, width: 2 }, 5, 1),
  },
  productImage: {
    height: '35%',
  },
  productInfo: {
    backgroundColor: WHITE,
    marginTop: -30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 30,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  txtCategory: {
    ...FONT_MEDIUM(14),
    backgroundColor: PRIMARY,
    paddingHorizontal: 5,
    color: WHITE,
    borderRadius: 10,
  },
  txtProductName: {
    ...FONT_MEDIUM(18),
  },
  txtProductPrice: {
    ...FONT_MEDIUM(18),
  },
  txtProductDesc: {
    ...FONT_REGULAR(14),
  },

  // Rating
  ratingWrapper: {
    backgroundColor: WHITE,
    paddingHorizontal: 10,
    flex: 1,
  },
  ratingTitle: {
    ...FONT_BOLD(18),
  },
  ratingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: WHITE,
  },
  customerProfil: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  customerPhoto: {
    height: 25,
    width: 25,
  },
  customerName: {
    marginLeft: 10,
    ...FONT_MEDIUM(14),
  },
  textCustomerReview: {
    ...FONT_REGULAR(14),
    color: SECONDARY,
  },
  customerRate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  customerDateRate: {
    marginLeft: 10,
    ...FONT_REGULAR(12),
  },
});
