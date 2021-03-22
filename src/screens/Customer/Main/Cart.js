import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React, { memo, useCallback, useEffect, useState } from 'react';
import {
  Dimensions,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';
import { CardCart, Gap, Header, Input, Notif } from '../../../components';
import { resetCart } from '../../../modules';
import { deleteCart, getAddresses, getCart, storeOrder } from '../../../services';
import { getPaymentMethods } from '../../../services/paymentMethod';
import { FONT_MEDIUM, GRAY_LIGHT, GRAY_MEDIUM, GRAY_THIN, WHITE } from '../../../styles';
import { showMessage } from '../../../utilities';

const Cart = ({ navigation }) => {
  const tabBarHeight = useBottomTabBarHeight();
  const sheetRef = React.useRef(null);
  const [selectPayment, setSelectPayment] = useState(false);
  const [searchPayment, setSearchPayment] = useState('');
  const [listBottomSheet, setListBottomSheet] = useState();
  const [paymentMethod, setPaymentMethod] = useState({});
  const [address, setAddress] = useState({});
  const [shipping, setShipping] = useState('');
  const [selectShipping, setSelectShipping] = useState(false);
  const [selectAddress, setSelectAddress] = useState(false);
  const { isLoading, message } = useSelector((state) => state.globalReducer);
  const { paymentMethods } = useSelector((state) => state.paymentMethodReducer);
  const { addresses } = useSelector((state) => state.addressReducer);
  const { cart } = useSelector((state) => state.cartReducer);

  useEffect(() => {
    _handleGetAddress();
    _handleGetPaymentMethod();
    navigation.addListener('focus', () => {
      _handleGetCart();
    });
    const unsubscribe = navigation.addListener('blur', () => {
      sheetRef.current.snapTo(1);
      setPaymentMethod({});
      setAddress({});
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (selectPayment) return setListBottomSheet(paymentMethods);
    if (selectAddress) return setListBottomSheet(addresses);
  }, [selectPayment, selectAddress]);

  const _handleGetCart = useCallback(async () => {
    await getCart();
  }, []);

  const _handleGetAddress = useCallback(async () => {
    await getAddresses();
  }, []);

  const handleDeleteCart = async (id) => {
    await deleteCart({ id });
    await getCart();
  };

  const _handleGetPaymentMethod = useCallback(async () => {
    await getPaymentMethods();
  }, []);

  const handleSelect = useCallback(
    async (selected) => {
      sheetRef.current.snapTo(0);
      setSelectPayment(false);
      setSelectAddress(false);
      setSelectShipping(false);
      if (selected === 'paymentMethod') setSelectPayment(true);
      if (selected === 'shipping') setSelectShipping(true);
      if (selected === 'address') setSelectAddress(true);
    },
    [selectPayment, selectAddress, selectShipping],
  );

  const _handleSearchPayment = (value) => {
    setSearchPayment(value);
    const SearchedPayment = paymentMethods.filter((paymentMethod) =>
      paymentMethod.name.toLowerCase().includes(value.toLowerCase()),
    );
    setListBottomSheet(SearchedPayment);
  };

  const _handleOrder = async () => {
    console.log(paymentMethod);
    if (Object.keys(paymentMethod).length === 0) {
      return showMessage('Metode Pembayaran harus diisi!');
    }
    if (shipping === null || shipping === '') {
      return showMessage('Pengiriman harus diisi!');
    }
    if (shipping === 0 && Object.keys(address).length === 0) {
      return showMessage('Alamat harus diisi!');
    }
    if (shipping === 0) {
      await storeOrder({
        payment_method: paymentMethod?.id,
        shipping_method: shipping,
        address: address?.id,
      });
    } else {
      await storeOrder({
        payment_method: paymentMethod?.id,
        shipping_method: shipping,
      });
    }
    navigation.navigate('CustomerMainScreen', {
      screen: 'Order',
    });
  };

  const renderContent = () => (
    <View
      style={{
        backgroundColor: WHITE,
        padding: 16,
        height: windowHeight * 0.8,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderLeftColor: GRAY_LIGHT,
        borderRightColor: GRAY_LIGHT,
      }}
    >
      {selectPayment &&
        listBottomSheet &&
        listBottomSheet?.map((paymentMethod, index) => (
          <TouchableOpacity
            style={{
              padding: 10,
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: GRAY_THIN,
            }}
            onPress={() => {
              sheetRef.current.snapTo(1);
              setPaymentMethod({ id: paymentMethod?.id, name: paymentMethod?.name });
            }}
            key={index.toString()}
          >
            <Text style={{ ...FONT_MEDIUM(14) }}>{paymentMethod?.name}</Text>
          </TouchableOpacity>
        ))}

      {selectShipping && (
        <View>
          <TouchableOpacity
            style={{
              padding: 10,
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: GRAY_THIN,
            }}
            onPress={() => {
              setShipping(0);
              sheetRef.current.snapTo(1);
            }}
          >
            <Text style={{ ...FONT_MEDIUM(14) }}>Diantar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: GRAY_THIN,
            }}
            onPress={() => {
              setShipping(1);
              sheetRef.current.snapTo(1);
            }}
          >
            <Text style={{ ...FONT_MEDIUM(14) }}>Ambil Sendiri</Text>
          </TouchableOpacity>
        </View>
      )}

      {selectAddress &&
        listBottomSheet &&
        listBottomSheet?.map((_address, index) => (
          <TouchableOpacity
            style={{
              padding: 10,
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: GRAY_THIN,
            }}
            onPress={() => {
              sheetRef.current.snapTo(1);
              setAddress({ id: _address.id, name: _address.name, address: _address.address });
            }}
            key={index.toString()}
          >
            <Text style={{ ...FONT_MEDIUM(14) }}>{_address.name}</Text>
          </TouchableOpacity>
        ))}
      {/* <TouchableOpacity
        style={{
          padding: 10,
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: GRAY_THIN,
        }}
        onPress={() => sheetRef.current.snapTo(1)}
      >
        <Text style={{ ...FONT_MEDIUM(14) }}>Perempuan</Text>
      </TouchableOpacity> */}
      <Gap height={tabBarHeight} />
    </View>
  );

  const renderHeader = () => (
    <View
      style={{
        width: '100%',
        backgroundColor: WHITE,
        justifyContent: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderColor: GRAY_THIN,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        paddingTop: 10,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          width: '20%',
          height: 3,
          backgroundColor: GRAY_MEDIUM,
          borderRadius: 5,
          alignSelf: 'center',
        }}
      />
      <Gap height={5} />
      <View
        style={{
          width: '20%',
          height: 3,
          backgroundColor: GRAY_MEDIUM,
          borderRadius: 5,
          alignSelf: 'center',
        }}
      />
      <Gap height={10} />
      <Input
        placeholder="Cari..."
        variant="roundedPill"
        search
        rightIcon
        noBorder
        number
        value={searchPayment}
        onChangeText={(value) => {
          _handleSearchPayment(value);
          sheetRef.current.snapTo(0);
        }}
        onFocus={() => {
          sheetRef.current.snapTo(0);
        }}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      <Header flat title="Keranjang" />
      <Notif />
      <Gap height={10} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 10 }}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={() => _handleGetCart()} />
        }
      >
        {cart?.cartdetails !== undefined && cart?.cartdetails.length > 0 && (
          <CardCart
            handleSelect={handleSelect}
            paymentMethod={paymentMethod}
            shipping={shipping}
            address={address}
            onPress={() => _handleOrder()}
            handleDeleteCart={handleDeleteCart}
          />
        )}

        <Gap height={tabBarHeight} />
      </ScrollView>
      <BottomSheet
        ref={sheetRef}
        snapPoints={['35%', 0, '81%']}
        renderContent={renderContent}
        renderHeader={renderHeader}
        enabledInnerScrolling
        initialSnap={1}
        onCloseStart={() => {
          setListBottomSheet(null);
          setSearchPayment('');
        }}
      />
    </View>
  );
};

export default memo(Cart);

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
