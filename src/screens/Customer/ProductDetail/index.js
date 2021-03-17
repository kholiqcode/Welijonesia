import { moment } from 'moment';
import indonesianLocale from 'moment/locale/id';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Rating } from 'react-native-ratings';
import { useDispatch, useSelector } from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';
import { ICBackActive, ICChat, ICLink, ICMarker, ILNoPhoto } from '../../../assets';
import { Button, Counter, Gap, SelectItem } from '../../../components';
import { setCounterValue, setProduct } from '../../../modules';
import { getProduct, storeOrUpdateCart } from '../../../services';
import {
  boxShadow,
  FONT_BOLD,
  FONT_MEDIUM,
  FONT_REGULAR,
  GRAY_DARK,
  GRAY_LIGHT,
  GRAY_MEDIUM,
  GRAY_THIN,
  PRIMARY,
  scaleSize,
  SECONDARY,
  WHITE,
} from '../../../styles';
import { showMessage } from '../../../utilities';

const ProductDetail = ({ navigation, route }) => {
  const { id } = route.params;
  const sheetRef = React.useRef(null);
  const { product } = useSelector((state) => state.productReducer);
  const { reviews } = useSelector((state) => state.reviewReducer);
  const { counterValue } = useSelector((state) => state.globalReducer);
  const [productDetail, setProductDetail] = useState(null);
  const [isAddCart, setIsAddCart] = useState(false);
  const [priceTotal, setPriceTotal] = useState(0);
  const dispatch = useDispatch();
  const _handleGetProduct = useCallback(async () => {
    await getProduct({ id });
  }, [product]);

  useEffect(() => {
    setPriceTotal(counterValue * productDetail?.price);
    return () => {
      setPriceTotal(0);
    };
  }, [counterValue, productDetail]);

  useEffect(() => {
    _handleGetProduct();
    return () => {
      setProductDetail(null);
      dispatch(setProduct(null));
    };
  }, []);

  const _handleOnSelectedItem = useCallback(
    (item) => {
      setProductDetail(item);
      dispatch(setCounterValue(1));
    },
    [productDetail],
  );

  const _handleOnAddCart = async () => {
    if (isAddCart) {
      if (counterValue <= 0) return showMessage('Jumlah pesanan anda tidak boleh kurang dari 0');
      if (priceTotal <= 0) return showMessage('Anda belum menentukan jumlah pesanan');
      sheetRef.current.snapTo(1);
      await storeOrUpdateCart({ product_detail: productDetail?.id, qty: counterValue });
      setProductDetail(null);
      setIsAddCart(false);
      dispatch(setCounterValue(1));
      navigation.navigate('CustomerMainScreen', {
        screen: 'Cart',
      });
    } else {
      sheetRef.current.snapTo(0);
    }
  };

  const renderHeader = () => (
    <View
      style={{
        width: '100%',
        backgroundColor: WHITE,
        height: scaleSize(40),
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderColor: GRAY_THIN,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
      }}
    >
      <View style={{ width: '20%', height: 3, backgroundColor: GRAY_MEDIUM, borderRadius: 5 }} />
      <Gap height={5} />
      <View style={{ width: '20%', height: 3, backgroundColor: GRAY_MEDIUM, borderRadius: 5 }} />
    </View>
  );

  const renderContent = () => (
    <View
      style={{
        backgroundColor: WHITE,
        padding: 16,
        height: 800,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderLeftColor: GRAY_LIGHT,
        borderRightColor: GRAY_LIGHT,
      }}
    >
      {/* <SelectList data={initCategory} /> */}
      <Text style={{ ...FONT_REGULAR(16) }}>Pilih Satuan</Text>
      <Gap height={10} />
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}
      >
        {product?.productdetails?.map((item, index) => (
          <View style={{ marginRight: 10 }} key={index.toString()}>
            <SelectItem
              value={item.productunit?.name}
              onPress={() => _handleOnSelectedItem(item)}
            />
          </View>
        ))}
      </View>
      <Gap width={-10} />
      <Gap height={10} />
      <Gap style={{ borderTopWidth: 1, borderTopColor: GRAY_MEDIUM }} />
      <Gap height={10} />
      <Text style={{ ...FONT_REGULAR(16) }}>Jumlah</Text>
      <View style={{ flex: 1 }}>
        {productDetail && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text style={{ ...FONT_MEDIUM(14), flex: 2 }}>{productDetail?.productunit?.name}</Text>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Counter />
            </View>
          </View>
        )}
      </View>
    </View>
  );

  return (
    <>
      {/* <StatusBar translucent backgroundColor="transparent" /> */}
      <View style={styles.container}>
        {/* <Header /> */}
        <Image source={{ uri: product?.comodity?.picturePath }} style={styles.productImage} />
        <View style={styles.productInfo}>
          <View style={styles.productDetail}>
            <View>
              <Text style={styles.txtCategory}>{product?.comodity?.category?.name}</Text>
              <Gap height={2} />
              <Text style={styles.txtProductName}>{product?.comodity?.name}</Text>
            </View>
            <Text style={styles.txtProductPrice}>
              Rp {Number.isNaN(priceTotal) ? 0 : priceTotal}
            </Text>
          </View>
          <Gap height={5} />
          <Text style={styles.txtProductDesc}>{product?.description}</Text>
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
                <Image
                  source={{ uri: product?.seller?.picturePath }}
                  style={{ height: 35, width: 35, borderRadius: 30 }}
                />
                <Gap width={10} />
                <Text style={{ ...FONT_MEDIUM(16) }}>{product?.seller?.name}</Text>
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
          data={reviews}
          ListHeaderComponent={() => (
            <View style={styles.ratingHeader}>
              <Text style={styles.ratingTitle}>Rating dan Ulasan</Text>
              <Button btnIcon="right" />
            </View>
          )}
          ListEmptyComponent={() => (
            <View>
              <Text>Penjual ini tidak memiliki ulasan apapun.</Text>
            </View>
          )}
          contentContainerStyle={{ paddingBottom: '8%' }}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 15 }}>
              <View style={styles.customerProfil}>
                <Image source={ILNoPhoto} style={styles.customerPhoto} />
                <Text style={styles.customerName}>{item.user?.name}</Text>
              </View>
              <Gap height={6} />
              <View style={styles.customerRate}>
                <Rating
                  ratingCount={5}
                  startingValue={item?.rate}
                  imageSize={15}
                  readonly
                  fractions={2}
                />
                <Text style={styles.customerDateRate}>
                  {moment().isAfter(moment(item.created_at).add(10, 'days').toDate())
                    ? moment(item.created_at).format('L')
                    : moment(item.created_at).local(indonesianLocale).startOf('day').fromNow()}
                </Text>
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
            zIndex: 999,
          }}
          onPress={() => _handleOnAddCart()}
        >
          <Text style={{ textAlign: 'center', ...FONT_BOLD(18), paddingVertical: 7, color: WHITE }}>
            {isAddCart ? 'Pesan Sekarang' : 'Pilih Kuantitas'}
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
      <BottomSheet
        ref={sheetRef}
        snapPoints={['40%', 0]}
        renderContent={renderContent}
        renderHeader={renderHeader}
        enabledInnerScrolling={false}
        initialSnap={1}
        onCloseEnd={() => setIsAddCart(false)}
        onOpenStart={() => setIsAddCart(true)}
      />
    </>
  );
};

export default memo(ProductDetail);

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
    top: 10,
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
    paddingHorizontal: 10,
    color: WHITE,
    borderRadius: 10,
    alignSelf: 'flex-start',
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
