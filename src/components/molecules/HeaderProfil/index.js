import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ILNoPhoto } from '../../../assets';
import { SECONDARY, WHITE } from '../../../styles';
import { Gap } from '../../atoms';

const HeaderProfil = () => (
  <View>
    <View style={styles.sellerWrapper}>
      <View style={styles.sellerProfil}>
        <Image source={ILNoPhoto} style={styles.sellerPhoto} />
        <Gap width={7} />
        <Text>WLijo</Text>
      </View>
      <View style={styles.sellerNav}>
        <TouchableOpacity style={styles.sellerNavBtn}>
          <Text style={styles.sellerNavLabel}>Kunjungi</Text>
        </TouchableOpacity>
        <Gap width={10} />
        <TouchableOpacity style={styles.sellerNavBtn}>
          <Text style={styles.sellerNavLabel}>Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default HeaderProfil;

const styles = StyleSheet.create({
  sellerWrapper: {
    paddingHorizontal: 10,
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: SECONDARY,
    backgroundColor: WHITE,
  },
  sellerProfil: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sellerPhoto: {
    height: 35,
    width: 35,
  },
  sellerNav: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' },
  sellerNavBtn: {
    backgroundColor: '#BFFCBF',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 30 / 2,
    width: 80,
    alignItems: 'center',
  },
  sellerNavLabel: {
    fontSize: 12,
  },
});
