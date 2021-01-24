import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ICBackCircle } from '../../../assets';
import { Button, Gap, Input } from '../../../components';
import { FONT_MEDIUM, FONT_REGULAR, PRIMARY, WHITE } from '../../../styles';

const Forgot = ({ handleSetForgot }) => (
  <View style={styles.container}>
    <View>
      <Gap height={15} />
      <Text style={styles.screenTitle}>
        Masukkan alamat email terdafyar anda untuk melakukan penyetelan ulang kata sandi
      </Text>
      <Gap height={20} />
      <Input
        placeholder="Email"
        autoCompleteType="email"
        keyboardType="default"
        variant="roundedPill"
      />
      <Gap height={25} />
      <Button text="KIRIM" />
      <Gap height={30} />
      <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => handleSetForgot(false)}>
        <ICBackCircle height={50} width={50} />
      </TouchableOpacity>
    </View>
  </View>
);

export default Forgot;

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
  txtForgotPassword: {
    ...FONT_MEDIUM(14),
    textAlign: 'center',
  },
});
