import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FONT_MEDIUM, FONT_REGULAR, PRIMARY, RED, WHITE } from '../../../styles';

const CardSeller = ({ seller, onPress }) => {
  const { type, name, picturePath, rutedetails } = seller;
  const rute = rutedetails.map((item) => item.rute.name);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} delayPressOut={0} delayPressIn={0}>
      <View style={styles.topLabel}>
        <Text style={styles.typeSeller} numberOfLines={1}>
          {type}
        </Text>
      </View>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: picturePath }} style={styles.sellerImage} />
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <Text style={styles.sellerName} numberOfLines={2}>
          {name}
        </Text>
        <Text style={styles.sellerAddress} numberOfLines={2} ellipsizeMode="tail">
          {rute.join(' => ')}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardSeller;

const styles = StyleSheet.create({
  container: {
    width: '48%',
    backgroundColor: WHITE,
    marginTop: 5,
    // padding: 10,
    borderRadius: 10 / 2,
  },
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    borderTopRightRadius: 10 / 2,
    borderTopLeftRadius: 10 / 2,
  },
  sellerImage: {
    width: '100%',
    aspectRatio: 1,
    borderTopRightRadius: 10 / 2,
    borderTopLeftRadius: 10 / 2,
  },
  typeSeller: {
    color: WHITE,
    ...FONT_REGULAR(12),
  },
  sellerName: {
    ...FONT_MEDIUM(12),
  },
  sellerAddress: {
    color: RED,
    ...FONT_REGULAR(10),
  },
  topLabel: {
    position: 'absolute',
    backgroundColor: PRIMARY,
    top: 0,
    left: 0,
    padding: 3,
    borderBottomRightRadius: 10 / 2,
    borderTopLeftRadius: 10 / 2,
    zIndex: 999,
  },
});
