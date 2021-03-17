import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React, { useCallback, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CardOrder, Gap, Header, Notif } from '../../../components';
import { setCurrentPage, setLastPage, resetOrders } from '../../../modules';
import { getOrders } from '../../../services';

const Order = ({ navigation }) => {
  const tabBarHeight = useBottomTabBarHeight();
  const { isLoading, currentPage, lastPage } = useSelector((state) => state.globalReducer);
  const { orders } = useSelector((state) => state.orderReducer);
  const dispatch = useDispatch();

  const _handleGetOrder = useCallback(async () => {
    if (currentPage > lastPage) return null;
    navigation.addListener('focus', async () => {
      await getOrders({ page: 1 });
    });
    await getOrders({ page: currentPage });
  }, [currentPage]);

  useEffect(() => {
    _handleGetOrder();

    const unsubscribe = navigation.addListener('blur', () => {
      dispatch(resetOrders());
      dispatch(setLastPage(2));
      dispatch(setCurrentPage(1));
    });
    return unsubscribe;
  }, []);
  return (
    <View style={styles.container}>
      <Header flat title="Pesanan" />
      <Notif />
      <Gap height={10} />
      <FlatList
        onRefresh={() => _handleGetOrder()}
        refreshing={isLoading}
        keyboardDismissMode="interactive"
        showsVerticalScrollIndicator={false}
        data={orders}
        renderItem={({ item }) => (
          <View>
            <CardOrder order={item} />
            <Gap height={20} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => _handleGetOrder()}
        onEndReachedThreshold={0.1}
        contentContainerStyle={{ paddingBottom: tabBarHeight - 10 }}
        style={styles.flatlist}
      />
      {/* <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        {orders.map((item, index) => (
          <CardOrder key={index.toString()} />
        ))} */}
      {/* <CardOrder />
        <Gap height={20} /> */}
      {/* <CardOrder />
        <Gap height={20} />
        <CardOrder />
        <Gap height={20} />
        <CardOrder />
        <Gap height={20} />
        <CardOrder /> */}
      {/* <Gap height={tabBarHeight} />
      </ScrollView> */}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 10,
  },
  flatlist: { paddingHorizontal: 10 },
});
