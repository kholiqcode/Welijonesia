import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useState } from 'react';
import { Image, Keyboard, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import { ILNoPhoto } from '../../../assets';
import { Button, Gap, Header } from '../../../components';
import {
  boxShadow,
  FONT_MEDIUM,
  FONT_REGULAR,
  GRAY_DARK,
  GRAY_THIN,
  PRIMARY,
  WHITE,
  RED,
  GRAY_LIGHT,
  scaleSize,
  GRAY_MEDIUM,
} from '../../../styles';
import SellerInfo from './SellerInfo';
import SellerProduct from './SellerProduct';

const TopTab = createMaterialTopTabNavigator();
const TopTabSeller = (props) => {
  const SellerInfoTab = () => <SellerInfo {...props} />;
  const SellerProductTab = () => <SellerProduct {...props} />;
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

const SellerDetail = () => {
  const [isFavorit, setIsFavorit] = useState(false);
  const sheetRef = React.useRef(null);

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
  return (
    <View style={styles.container} onStartShouldSetResponder={() => Keyboard.dismiss()}>
      <Header />
      <View />
      <View style={styles.content}>
        <View style={styles.navigationWrapper}>
          <Button btnIcon="chat-white" />
          <Gap width={10} />
          {isFavorit ? (
            <Button btnIcon="favoritActive" onPress={() => setIsFavorit(!isFavorit)} />
          ) : (
            <Button btnIcon="favorit" onPress={() => setIsFavorit(!isFavorit)} />
          )}
        </View>
        <View style={styles.sellerDetail}>
          <View style={styles.sellerPhotoWrapper}>
            <Image source={ILNoPhoto} style={styles.sellerPhoto} />
          </View>
          <Gap width={20} />
          <View>
            <Text style={styles.sellerName}>Lijo Kholiq</Text>
            <Gap height={5} />
            <Text
              style={{
                ...FONT_REGULAR(12),
                color: RED,
                paddingHorizontal: 3,
                backgroundColor: WHITE,
                borderRadius: 30,
                textAlign: 'center',
                textAlignVertical: 'center',
              }}
            >
              Tutup
            </Text>
          </View>
        </View>
        <View style={styles.sellerInfo}>
          <View style={styles.itemSellerInfo}>
            <Text style={styles.infoValue}>0.0/5.0</Text>
            <Text style={styles.infoDesc}>Dari Pembeli</Text>
          </View>
          <Gap style={styles.border} />
          <View style={styles.itemSellerInfo}>
            <Text style={styles.infoValue}>100</Text>
            <Text style={styles.infoDesc}>Menyuukai</Text>
          </View>
        </View>
        <Gap height={10} />
        <View style={styles.topTabWrapper}>
          <TopTabSeller onBottomSheet />
        </View>
      </View>

      <BottomSheet
        ref={sheetRef}
        snapPoints={['100%', 0]}
        renderContent={renderContent}
        renderHeader={renderHeader}
        enabledInnerScrolling={false}
        initialSnap={1}
      />
    </View>
  );
};
export default SellerDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 10,
    paddingTop: 15,
    backgroundColor: PRIMARY,
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: GRAY_THIN,
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
