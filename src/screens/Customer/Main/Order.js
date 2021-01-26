import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { CardOrder, Gap, Header, Notif } from '../../../components';
import { GRAY_THIN, WHITE } from '../../../styles';

const Order = () => {
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <View style={styles.container}>
      <Header flat title="Pesanan" />
      <Notif />
      <Gap height={10} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <CardOrder />
        <Gap height={20} />
        <CardOrder />
        <Gap height={20} />
        <CardOrder />
        <Gap height={20} />
        <CardOrder />
        <Gap height={20} />
        <CardOrder />
        <Gap height={tabBarHeight} />
      </ScrollView>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});