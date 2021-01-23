import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ILMotorDelivery } from '../../../assets';
import { AuthContainer, Button, Gap } from '../../../components';
import { FONT_REGULAR, PRIMARY } from '../../../styles';

export default function ChooseRole() {
  return (
    <AuthContainer>
      <View style={styles.welcomeWrapper}>
        <Image source={ILMotorDelivery} />
        <Gap height={15} />
        <Text style={styles.textWelcome}>SELAMAT DATANG DI APLIKASI WELIJONESIA</Text>
        <Gap height={24} />
        <Text style={styles.textWelcome}>LOGIN</Text>
        <Gap height={7} />
        <Text style={styles.textWelcome}>Pilih Sebagai :</Text>
        <Gap height={22} />
      </View>
      <View>
        <Button text="Pelanggan" variant="roundedPill" />
        <Gap height={20} />
        <Button text="Penjual" variant="roundedPill" />
      </View>
    </AuthContainer>
  );
}

const styles = StyleSheet.create({
  welcomeWrapper: {
    alignItems: 'center',
  },
  textWelcome: {
    textAlign: 'center',
    color: PRIMARY,
    ...FONT_REGULAR(14),
  },
});
