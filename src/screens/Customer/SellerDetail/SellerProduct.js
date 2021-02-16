import React, { useState, useRef } from 'react';

import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CardProduct, Gap } from '../../../components';
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

const SellerProduct = () => (
  <View style={styles.container}>
    <FlatList
      style={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      stickyHeaderIndices={[0]}
      scrollEnabled
      numColumns={2}
      data={[0, 1, 2, 3, 4, 5]}
      ListHeaderComponentStyle={{ paddingHorizontal: 10 }}
      columnWrapperStyle={{
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 5,
      }}
      ListHeaderComponent={() => <HeaderCategory />}
      renderItem={({ item }) => <CardProduct />}
    />
  </View>
);

export default SellerProduct;

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
