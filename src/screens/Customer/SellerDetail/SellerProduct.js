import React, { useState, useRef, memo, useCallback, useEffect } from 'react';

import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { CardProduct, Gap } from '../../../components';
import { getProducts } from '../../../services';
import { FONT_MEDIUM, GRAY_THIN, PRIMARY, SECONDARY, WHITE } from '../../../styles';

const LabelCategory = ({ category }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <TouchableOpacity
      style={{ justifyContent: 'center' }}
      onPress={() => setIsSelected(!isSelected)}
    >
      <Text style={styles.txtCategory(isSelected)}>{category}</Text>
    </TouchableOpacity>
  );
};

const HeaderCategory = () => {
  // const [isSelected, setIsSelected] = useState(false);
  const isSelected = useRef(true);
  return (
    <ScrollView
      alwaysBounceVertical
      horizontal
      style={{
        maxHeight: 50,
        marginHorizontal: -10,
        backgroundColor: GRAY_THIN,
        paddingVertical: 5,
      }}
      contentContainerStyle={{
        justifyContent: 'space-between',
        maxHeight: 50,
      }}
      showsHorizontalScrollIndicator={false}
    >
      <Gap width={10} />
      <LabelCategory category="Semua" />
      <Gap width={20} />
      <LabelCategory category="Pokok" />
      <Gap width={20} />
      <LabelCategory category="Sayuran" />
      <Gap width={20} />
      <LabelCategory category="Daging" />
      <Gap width={20} />
      <LabelCategory category="Bumbu" />
      <Gap width={20} />
      <LabelCategory category="Ikan" />
      <Gap width={20} />
      <LabelCategory category="Lainnya" />
      <Gap width={20} />
    </ScrollView>
  );
};

const SellerProduct = ({ route }) => {
  const { id } = route.params;
  const { products } = useSelector((state) => state.productReducer);
  const _handleGetProduct = useCallback(async () => {
    await getProducts({ seller_id: id });
  }, [products]);
  useEffect(() => {
    _handleGetProduct();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        stickyHeaderIndices={[0]}
        scrollEnabled
        numColumns={2}
        data={products}
        ListHeaderComponentStyle={{ paddingHorizontal: 10 }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
        ListHeaderComponent={() => <HeaderCategory />}
        renderItem={({ item }) => <CardProduct product={item} />}
        ListEmptyComponent={() => <Text>Tidak ada data</Text>}
      />
    </View>
  );
};

export default memo(SellerProduct);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GRAY_THIN,
    paddingVertical: 10,
  },
  txtCategory: (isSelected) => ({
    textAlignVertical: 'center',
    backgroundColor: isSelected ? PRIMARY : SECONDARY,
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 13,
    ...FONT_MEDIUM(12),
    color: WHITE,
  }),
});
