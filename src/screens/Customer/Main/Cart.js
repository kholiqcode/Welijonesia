import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React, { useState, useEffect, useCallback, memo } from 'react';

import {
  Dimensions,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';
import { CardCart, Gap, Header, Input, Notif } from '../../../components';
import { getCart } from '../../../services';
import { getPaymentMethods } from '../../../services/paymentMethod';
import { FONT_MEDIUM, GRAY_LIGHT, GRAY_MEDIUM, GRAY_THIN, WHITE } from '../../../styles';

const Cart = () => {
  const tabBarHeight = useBottomTabBarHeight();
  const sheetRef = React.useRef(null);
  const [selectPayment, setSelectPayment] = useState(false);
  const [searchPayment, setSearchPayment] = useState('');
  const [listPayment, setListPayment] = useState();
  const [paymentMethod, setPaymentMethod] = useState({});
  const [selectShippig, setSelectShippig] = useState(false);
  const { isLoading } = useSelector((state) => state.globalReducer);
  const { paymentMethods } = useSelector((state) => state.paymentMethodReducer);

  useEffect(() => {
    _handleGetCart();
  }, []);

  useEffect(() => {
    setListPayment(paymentMethods);
  }, [paymentMethods]);

  const _handleGetCart = useCallback(async () => {
    await getCart();
  }, []);

  const handleSelectPayment = useCallback(async () => {
    setSelectPayment(true);
    await getPaymentMethods();
    sheetRef.current.snapTo(0);
  }, [selectPayment]);

  const _handleSearchPayment = (value) => {
    setSearchPayment(value);
    const SearchedPayment = paymentMethods.filter((paymentMethod) =>
      paymentMethod.name.toLowerCase().includes(value.toLowerCase()),
    );
    setListPayment(SearchedPayment);
  };

  const handleSelectShippig = () => {
    setSelectShippig(true);
    sheetRef.current.snapTo(0);
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
        listPayment &&
        listPayment?.map((paymentMethod, index) => (
          <TouchableOpacity
            style={{
              padding: 10,
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: GRAY_THIN,
            }}
            onPress={() => {
              sheetRef.current.snapTo(1);
              setPaymentMethod({ id: paymentMethod.id, name: paymentMethod.name });
            }}
            key={index.toString()}
          >
            <Text style={{ ...FONT_MEDIUM(14) }}>{paymentMethod.name}</Text>
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
        placeholder="Cari metode pembayaran"
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
        onFocus={() => sheetRef.current.snapTo(0)}
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
        <CardCart handleSelectPayment={handleSelectPayment} paymentMethod={paymentMethod} />
        <Gap height={tabBarHeight} />
      </ScrollView>
      <BottomSheet
        ref={sheetRef}
        snapPoints={['35%', 0, '81%']}
        renderContent={renderContent}
        renderHeader={renderHeader}
        enabledInnerScrolling
        initialSnap={1}
        onCloseEnd={() => {
          setListPayment([]);
          setSearchPayment('');
          setSelectPayment(false);
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
