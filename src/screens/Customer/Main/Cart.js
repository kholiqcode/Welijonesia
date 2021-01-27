import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';

import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import { CardCart, Gap, Header, HeaderProfil, Notif } from '../../../components';
import { FONT_MEDIUM, GRAY_LIGHT, GRAY_MEDIUM, GRAY_THIN, WHITE } from '../../../styles';

export default function Cart() {
  const tabBarHeight = useBottomTabBarHeight();
  const sheetRef = React.useRef(null);
  const [selectPayment, setSelectPayment] = useState(false);
  const [selectShippig, setSelectShippig] = useState(false);

  const handleSelectPayment = () => {
    setSelectPayment(true);
    sheetRef.current.snapTo(0);
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
      <Gap height={tabBarHeight} />
    </View>
  );

  const renderHeader = () => (
    <View
      style={{
        width: '100%',
        backgroundColor: WHITE,
        height: 40,
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
    <View style={styles.container}>
      <Header flat title="Keranjang" />
      <Notif />
      <Gap height={10} />
      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 10 }}>
        <CardCart handleSelectPayment={handleSelectPayment} />
        <Gap height={tabBarHeight} />
      </ScrollView>
      <BottomSheet
        ref={sheetRef}
        snapPoints={['35%', 0, '81%']}
        renderContent={renderContent}
        renderHeader={renderHeader}
        enabledInnerScrolling
        initialSnap={1}
      />
    </View>
  );
}

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
