import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FONT_MEDIUM, PRIMARY, SECONDARY, WHITE } from '../../../styles';

const SelectItem = ({ value, onPress }) => {
  const [isSelected, setIsSelected] = useState(false);
  const _onSelect = () => {
    setIsSelected(!isSelected);
    onPress(!isSelected);
  };
  return (
    <TouchableOpacity onPress={_onSelect}>
      <Text style={styles.txtCategory(isSelected)}>{value}</Text>
    </TouchableOpacity>
  );
};
export default SelectItem;

const styles = StyleSheet.create({
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
