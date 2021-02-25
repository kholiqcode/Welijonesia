import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';
import { CardSeller, Filter, Gap, Header } from '../../../components';
import { getSeller } from '../../../services';
import { FONT_MEDIUM, GRAY_LIGHT, GRAY_MEDIUM, GRAY_THIN, WHITE } from '../../../styles';

const Home = ({ navigation }) => {
  const [seller, setSeller] = useState([]);
  const [selectRute, setSelectRute] = useState(false);
  const [selectType, setSelectType] = useState(false);
  const [tipe, setTipe] = useState('campuran');
  const [pageCurrent, setPageCurrent] = useState(1);
  const [lastPage, setLastPage] = useState(100);
  const sheetRef = React.useRef(null);
  const tabBarHeight = useBottomTabBarHeight();
  const { isLoading } = useSelector((state) => state.globalReducer);

  const handleSelectType = () => {
    setSelectType(true);
    sheetRef.current.snapTo(0);
  };

  const handleSelectRute = () => {
    setSelectRute(true);
    sheetRef.current.snapTo(0);
  };

  const _handleGetSeller = async () => {
    if (pageCurrent > lastPage) return null;
    console.log(tipe);
    const [res, err] = await getSeller({ page: pageCurrent, type: tipe });
    if (res === undefined) return console.log('Tidak ada data');
    setSeller((seller) => [...seller, ...res.data.seller.data]);
    setPageCurrent(pageCurrent + 1);
    setLastPage(res.data.seller.last_page ?? 100);
  };

  const _onSelectType = (type) => {
    setTipe(type);
    console.log(type);
    sheetRef.current.snapTo(1);
    setSeller([]);
    setPageCurrent(1);
  };

  useEffect(() => {
    _handleGetSeller();
    return () => _handleGetSeller();
  }, [tipe]);

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
        onPress={() => _onSelectType('campuran')}
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
        onPress={() => _onSelectType('keliling')}
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
        onPress={() => _onSelectType('mangkal')}
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
        data={seller}
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
        keyExtractor={(item) => item.id.toString()}
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

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GRAY_THIN,
  },
  columnWrapper: { justifyContent: 'space-between', margin: 4, paddingHorizontal: 4 },
});
