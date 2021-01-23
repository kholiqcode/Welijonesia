import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { Button, Gap, Input } from '../../../components';
import { FONT_REGULAR, PRIMARY, WHITE } from '../../../styles';

const Register = () => {
  const [hidePasswrd, setHidePassword] = useState(true);
  return (
    <View style={styles.container}>
      <View>
        <Gap height={15} />
        <Text style={styles.screenTitle}>REGISTER WELIJONESIA</Text>
        <Gap height={20} />
        <Input placeholder="Name" autoCompleteType="name" variant="roundedPill" />
        <Gap height={15} />
        <Input
          placeholder="Email"
          autoCompleteType="email"
          keyboardType="email-address"
          variant="roundedPill"
        />
        <Gap height={15} />
        <Input
          placeholder="Password"
          secureTextEntry
          autoCompleteType="password"
          variant="roundedPill"
          hidePassword={hidePasswrd}
          onPress={() => setHidePassword(!hidePasswrd)}
        />
        <Gap height={15} />
        <Input
          placeholder="Konfirmasi Password"
          secureTextEntry
          autoCompleteType="password"
          variant="roundedPill"
          hidePassword={hidePasswrd}
          onPress={() => setHidePassword(!hidePasswrd)}
        />
        <Gap height={30} />
        <Button text="MASUK" />
      </View>
    </View>
  );
};

export default Register;

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
});
