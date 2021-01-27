import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
  ICBack,
  ICEditAddress,
  ICTrash,
  ICFavorit,
  ICFavoritActive,
  ICChatWhite,
  ICMotor,
  ICPhone,
  ICHomeActive,
  ICEmail,
  ICMarker,
  ICRight,
} from '../../../assets';

const BtnIcon = ({ btnIcon, onPress, disabled }) => {
  const Icon = () => {
    if (btnIcon === 'back') return <ICBack height={24} width={24} />;
    if (btnIcon === 'trash') return <ICTrash height={24} width={24} />;
    if (btnIcon === 'editAddress') return <ICEditAddress height={24} width={24} />;
    if (btnIcon === 'favorit') return <ICFavorit height={30} width={30} />;
    if (btnIcon === 'favoritActive') return <ICFavoritActive height={30} width={30} />;
    if (btnIcon === 'chat-white') return <ICChatWhite height={30} width={30} />;
    if (btnIcon === 'motor') return <ICMotor height={30} width={30} />;
    if (btnIcon === 'phone') return <ICPhone height={30} width={30} />;
    if (btnIcon === 'home-active') return <ICHomeActive height={30} width={30} />;
    if (btnIcon === 'email') return <ICEmail height={30} width={30} />;
    if (btnIcon === 'marker') return <ICMarker height={30} width={30} />;
    if (btnIcon === 'right') return <ICRight height={30} width={30} />;
    return <ICTrash height={24} width={24} />;
  };
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Icon />
    </TouchableOpacity>
  );
};

export default BtnIcon;

const styles = StyleSheet.create({});
