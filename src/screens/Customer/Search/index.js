import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Button, Header } from '../../../components';
import { FONT_BOLD, FONT_REGULAR, GRAY_MEDIUM, RED } from '../../../styles';

const Search = ({ navigation }) => {
  const ListItem = () => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingEnd: 15,
        paddingHorizontal: 10,
      }}
    >
      <Text style={{ ...FONT_REGULAR(14) }}>Lijo Jember</Text>
      <Button btnIcon="trash" onPress={() => navigation.goBack()} />
    </View>
  );
  return (
    <View style={{ flex: 1 }}>
      <Header type="headerSearch" autoFocusKeyboard />
      <FlatList
        ListHeaderComponent={() => (
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-between',
              borderBottomWidth: 1,
              borderBottomColor: GRAY_MEDIUM,
              paddingHorizontal: 10,
              paddingVertical: 10,
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                ...FONT_BOLD(16),
              }}
            >
              Terakhir Dicari
            </Text>
            <Text
              style={{
                ...FONT_BOLD(12),
                color: RED,
              }}
            >
              Hapus Semua
            </Text>
          </View>
        )}
        data={[0, 1, 2, 3, 4]}
        keyExtractor={(_, index) => index.toString()}
        renderItem={(item) => <ListItem />}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
