import React, { useEffect, useState } from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ICBackCircle } from '../../../assets';
import { Button, Gap, Input } from '../../../components';
import { FONT_MEDIUM, FONT_REGULAR, PRIMARY, WHITE } from '../../../styles';

const Activation = ({ handleSetActivation }) => {
  const [counter, setCounter] = React.useState(60);

  // Third Attempts
  React.useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <View style={styles.container}>
      <Gap height={15} />
      <Text style={styles.screenTitle}>
        Verifikasi akun Anda masukkan kode unik yang kami kirim ke alamat email anda
      </Text>
      <Gap height={20} />
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          backgroundColor: 'red',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ width: '5%' }}>
          <Input placeholder="Kode" autoCapitalize="characters" keyboardType="number-pad" />
        </View>
        <View style={{ width: '5%' }}>
          <Input placeholder="Kode" autoCapitalize="characters" keyboardType="number-pad" />
        </View>
        <View style={{ width: '5%' }}>
          <Input placeholder="Kode" autoCapitalize="characters" keyboardType="number-pad" />
        </View>
        <View style={{ width: '5%' }}>
          <Input placeholder="Kode" autoCapitalize="characters" keyboardType="number-pad" />
        </View>
      </View>
      <Gap height={25} />
      {counter !== 0 ? (
        <Text style={styles.txtCounter}>{String(counter).padStart(2, '0')}</Text>
      ) : (
        <Button text="KIRIM ULANG" secondary onPress={() => setCounter(60)} />
      )}
      <Gap height={25} />
      <Button text="SUBMIT" />
      <Gap height={30} />
      <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => handleSetActivation(false)}>
        <ICBackCircle height={50} width={50} />
      </TouchableOpacity>
    </View>
  );
};

export default Activation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    paddingHorizontal: 5,
  },
  screenTitle: {
    color: PRIMARY,
    ...FONT_REGULAR(14),
    textAlign: 'center',
  },
  txtCounter: {
    ...FONT_MEDIUM(14),
    textAlign: 'center',
  },
});
