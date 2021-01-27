import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import { Gap } from '../../../components';
import { CardSeller, Filter, Header } from '../../../components/molecules';
import { FONT_MEDIUM, GRAY_LIGHT, GRAY_MEDIUM, GRAY_THIN, WHITE } from '../../../styles';

const Home = ({ navigation }) => {
  const [seller, setSeller] = useState([0, 1, 2, 3, 4, 5]);
  const [selectRute, setSelectRute] = useState(false);
  const [selectType, setSelectType] = useState(false);
  const sheetRef = React.useRef(null);
  const tabBarHeight = useBottomTabBarHeight();

  const handleSelectType = () => {
    setSelectType(true);
    sheetRef.current.snapTo(0);
  };

  const handleSelectRute = () => {
    setSelectRute(true);
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
      <Header />
      <FlatList
        // onRefresh={() => console.log('refresh')}
        // refreshing
        keyboardDismissMode="interactive"
        showsVerticalScrollIndicator={false}
        data={seller}
        numColumns={2}
        ListHeaderComponent={() => (
          <Filter onPressType={handleSelectType} onPressRute={handleSelectRute} />
        )}
        stickyHeaderIndices={[0]}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={{ paddingBottom: tabBarHeight }}
        renderItem={({ item, index }) => (
          <CardSeller onPress={() => navigation.navigate('SellerDetail')} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <BottomSheet
        ref={sheetRef}
        snapPoints={['35%', 0, '81%']}
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
