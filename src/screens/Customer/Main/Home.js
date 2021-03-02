import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React, { memo, useEffect } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';
import { CardSeller, Gap, Header } from '../../../components';
import { setCurrentPage, setLastPage } from '../../../modules';
import { getSellers } from '../../../services';
import { FONT_MEDIUM, GRAY_LIGHT, GRAY_MEDIUM, GRAY_THIN, WHITE } from '../../../styles';

const Home = ({ navigation }) => {
  const sheetRef = React.useRef(null);
  const tabBarHeight = useBottomTabBarHeight();
  const { isLoading, currentPage, lastPage } = useSelector((state) => state.globalReducer);
  const { sellers } = useSelector((state) => state.sellerReducer);
  const dispatch = useDispatch();

  const _handleGetSeller = async () => {
    if (currentPage > lastPage) return null;
    await getSellers({ page: currentPage });
  };

  useEffect(() => {
    _handleGetSeller();
    return () => {
      dispatch(setLastPage(2));
      dispatch(setCurrentPage(1));
    };
  }, []);

  const renderContent = () => (
    <View
      style={{
        backgroundColor: WHITE,
        padding: 16,
        height: windowHeight,
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
      >
        <Text style={{ ...FONT_MEDIUM(14) }}>Campuran</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 10,
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: GRAY_THIN,
        }}
      >
        <Text style={{ ...FONT_MEDIUM(14) }}>Keliling</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 10,
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: GRAY_THIN,
        }}
      >
        <Text style={{ ...FONT_MEDIUM(14) }}>Mangkal</Text>
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
      <Header />
      <FlatList
        onRefresh={() => _handleGetSeller()}
        refreshing={isLoading}
        keyboardDismissMode="interactive"
        showsVerticalScrollIndicator={false}
        data={sellers}
        numColumns={2}
        // ListHeaderComponent={() => (
        //   <Filter
        //     typePlaceholder={tipe}
        //     onPressType={handleSelectType}
        //     onPressRute={handleSelectRute}
        //   />
        // )}
        // stickyHeaderIndices={[0]}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={{ paddingBottom: tabBarHeight }}
        renderItem={({ item }) => (
          <CardSeller seller={item} onPress={() => navigation.navigate('SellerDetail', item)} />
        )}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => _handleGetSeller()}
        onEndReachedThreshold={0.1}
      />
      <BottomSheet
        ref={sheetRef}
        snapPoints={['50%', 0, '81%']}
        renderContent={renderContent}
        renderHeader={renderHeader}
        enabledInnerScrolling={false}
        initialSnap={1}
      />
    </View>
  );
};

const windowHeight = Dimensions.get('window').height;

export default memo(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GRAY_THIN,
  },
  columnWrapper: { justifyContent: 'space-between', margin: 4, paddingHorizontal: 4 },
});
