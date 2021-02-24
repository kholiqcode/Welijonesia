import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { boxShadow, GRAY_DARK, GRAY_MEDIUM, WHITE } from '../../../styles';
import { Gap, Input } from '../../atoms';

const Filter = ({ onPressType, onPressRute, typePlaceholder }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.selectType} onPress={() => onPressType()}>
      <Input
        placeholder={typePlaceholder}
        select
        rightIcon
        disable
        noBorder
        onPress={() => onPressType()}
      />
    </TouchableOpacity>
    <Gap width={20} style={{ borderStartWidth: 2, borderStartColor: GRAY_MEDIUM }} />
    <TouchableOpacity style={styles.selectRute} onPress={() => onPressRute()}>
      <Input
        placeholder="Rute Lijo"
        select
        rightIcon
        disable
        noBorder
        onPress={() => onPressRute()}
      />
    </TouchableOpacity>
  </View>
);

export default Filter;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: WHITE,
    ...boxShadow(GRAY_DARK, { height: 2, width: 2 }, 4, 1),
  },
  selectRute: { flex: 2 },
  selectType: { flex: 1.2 },
});
