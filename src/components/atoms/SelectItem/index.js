import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FONT_MEDIUM, SECONDARY, WHITE } from '../../../styles';

const SelectItem = ({ value, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.txtCategory}>{value}</Text>
  </TouchableOpacity>
);
export default SelectItem;

const styles = StyleSheet.create({
  txtCategory: {
    textAlignVertical: 'center',
    backgroundColor: SECONDARY,
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 10,
    ...FONT_MEDIUM(12),
    color: WHITE,
  },
});
