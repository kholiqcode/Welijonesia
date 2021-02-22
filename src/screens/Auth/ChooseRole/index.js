import React from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { ILMotorDelivery } from '../../../assets';
import { AuthContainer, Button, Gap } from '../../../components';
import { FONT_REGULAR, PRIMARY } from '../../../styles';

const ChooseRole = ({ navigation }) => (
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
      <Button
        text="Pelanggan"
        variant="roundedPill"
        onPress={() => navigation.navigate('CustomerAuth')}
      />
      <Gap height={20} />
      <Button text="Penjual" variant="roundedPill" />
    </View>
  </AuthContainer>
);

export default ChooseRole;

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
