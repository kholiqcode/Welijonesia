import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { memo, useCallback, useEffect, useState } from 'react';
import {
  Image,
  Keyboard,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ICBackActive } from '../../../assets';
import { Button, Gap } from '../../../components';
import { resetProduct } from '../../../modules';
import { getSeller, storeOrUpdateFavorit } from '../../../services';
import {
  boxShadow,
  FONT_MEDIUM,
  FONT_REGULAR,
  GRAY_DARK,
  GRAY_LIGHT,
  GRAY_MEDIUM,
  GRAY_THIN,
  PRIMARY,
  RED,
  scaleSize,
  WHITE,
} from '../../../styles';
import SellerInfo from './SellerInfo';
import SellerProduct from './SellerProduct';

const TopTab = createMaterialTopTabNavigator();
const TopTabSeller = (props) => {
  const SellerInfoTab = useCallback(() => <SellerInfo {...props} />, []);
  const SellerProductTab = useCallback(() => <SellerProduct {...props} />, []);
  return (
    <TopTab.Navigator
      tabBarOptions={{
        labelStyle: { ...FONT_MEDIUM(12) },
        indicatorStyle: {
          borderBottomColor: PRIMARY,
          borderBottomWidth: 5,
        },
        tabStyle: {},
        style: {
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
      }}
    >
      <TopTab.Screen name="Lijo" component={SellerInfoTab} />
      <TopTab.Screen name="Dagangan" component={SellerProductTab} />
    </TopTab.Navigator>
  );
};

const SellerDetail = ({ navigation, route }) => {
  const [isFavorit, setIsFavorit] = useState(false);
  const sheetRef = React.useRef(null);
  const [countFavorit, setCountFavorit] = useState(0);
  const { isLoading } = useSelector((state) => state.globalReducer);
  const { seller } = useSelector((state) => state.sellerReducer);
  const { id } = route.params;
  const dispatch = useDispatch();

  const _handleUpdateFavorit = useCallback(async () => {
    setIsFavorit(!isFavorit);
    const [res, err] = await storeOrUpdateFavorit({ seller_id: id });
    if (err) return console.log('Gagal update Favorit');
    setCountFavorit(res.data.countFavorit);
  }, [countFavorit]);

  const _handleGetSeller = useCallback(async () => {
    await getSeller({ id });
  }, [seller]);

  useEffect(() => {
    _handleGetSeller();
    const unmounted = async () => {
      dispatch(resetProduct());
      console.log('did unmount');
    };
    return unmounted;
  }, [id]);

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
      <TouchableOpacity
        style={{
          padding: 10,
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: GRAY_THIN,
        }}
        onPress={() => sheetRef.current.snapTo(1)}
      >
        <Text style={{ ...FONT_MEDIUM(14) }}>Laki-Laki</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 10,
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: GRAY_THIN,
        }}
        onPress={() => sheetRef.current.snapTo(1)}
      >
        <Text style={{ ...FONT_MEDIUM(14) }}>Perempuan</Text>
      </TouchableOpacity>
    </View>
  );

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
  if (isLoading) return <Text>Loading</Text>;
  return (
    <>
      <View style={styles.container} onStartShouldSetResponder={() => Keyboard.dismiss()}>
        {/* <Header /> */}
        <View style={styles.content}>
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={isLoading} onRefresh={() => _handleGetSeller()} />
            }
          >
            <View style={styles.navigationWrapper}>
              <Button btnIcon="chat-white" />
              <Gap width={10} />
              <Button
                btnIcon={isFavorit ? 'favoritActive' : 'favorit'}
                onPress={() => _handleUpdateFavorit()}
              />
            </View>
            <Gap height={15} />
            <View style={styles.sellerDetail}>
              <View style={styles.sellerPhotoWrapper}>
                <Image source={{ uri: seller.picturePath }} style={styles.sellerPhoto} />
              </View>
              <Gap width={20} />
              <View style={{ flexShrink: 1 }}>
                <Text style={styles.sellerName} ellipsizeMode="tail" numberOfLines={1}>
                  {seller.name}
                </Text>
                <Gap height={5} />
                <Text
                  style={{
                    ...FONT_REGULAR(12),
                    color: RED,
                    paddingHorizontal: 20,
                    backgroundColor: WHITE,
                    borderRadius: 30,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    alignSelf: 'flex-start',
                  }}
                >
                  {seller.active ? 'Buka' : 'Tutup'}
                </Text>
              </View>
            </View>
            <View style={styles.sellerInfo}>
              <View style={styles.itemSellerInfo}>
                <Text style={styles.infoValue}>{seller.rate}/5</Text>
                <Text style={styles.infoDesc}>Dari Pembeli</Text>
              </View>
              <Gap style={styles.border} />
              <View style={styles.itemSellerInfo}>
                <Text style={styles.infoValue}>{countFavorit}</Text>
                <Text style={styles.infoDesc}>Menyukai</Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.topTabWrapper}>
          <TopTabSeller onBottomSheet sellerId={id} />
        </View>
        {/* <BottomSheet
          ref={sheetRef}
          snapPoints={['100%', 0]}
          renderContent={renderContent}
          renderHeader={renderHeader}
          enabledInnerScrolling={false}
          initialSnap={1}
        /> */}
      </View>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <ICBackActive height="30" width="30" />
      </TouchableOpacity>
    </>
  );
};
export default memo(SellerDetail);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY,
  },
  content: {
    paddingHorizontal: 10,
    paddingTop: 15,
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
  navigationWrapper: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 10,
  },
  sellerPhotoWrapper: {
    height: 120,
    width: 120,
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 120 / 2,
    ...boxShadow(GRAY_DARK, { height: 1, width: 1 }, 5, 1),
  },
  sellerPhoto: {
    height: 100,
    width: 100,
    resizeMode: 'cover',
    borderRadius: 100 / 2,
  },
  sellerDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  sellerName: {
    ...FONT_MEDIUM(20),
    color: WHITE,
  },
  sellerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  itemSellerInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  border: {
    borderWidth: 1,
    borderColor: WHITE,
  },
  topTabWrapper: {
    flex: 1,
    marginHorizontal: -10,
    backgroundColor: WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    ...boxShadow(GRAY_DARK, { height: -10, width: -10 }, 10, 1),
  },
  infoValue: {
    ...FONT_MEDIUM(16),
    color: WHITE,
  },
  infoDesc: {
    ...FONT_MEDIUM(14),
    color: WHITE,
  },
});
