import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ICBack, ICEditAddress, ICTrash } from '../../../assets';

const BtnIcon = ({ btnIcon, onPress }) => {
  const Icon = () => {
    if (btnIcon === 'back') return <ICBack height={24} width={24} />;
    if (btnIcon === 'trash') return <ICTrash height={24} width={24} />;
    if (btnIcon === 'editAddress') return <ICEditAddress height={24} width={24} />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default BtnIcon;

const styles = StyleSheet.create({});
