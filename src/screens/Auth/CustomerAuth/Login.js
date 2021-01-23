import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { Button, Gap, Input } from '../../../components';
import { FONT_MEDIUM, FONT_REGULAR, PRIMARY, WHITE } from '../../../styles';

const Login = () => {
  const [hidePasswrd, setHidePassword] = useState(true);
  return (
    <View style={styles.container}>
      <View>
        <Gap height={15} />
        <Text style={styles.screenTitle}>LOGIN WELIJONESIA</Text>
        <Gap height={20} />
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
        <Gap height={30} />
        <TouchableOpacity>
          <Text style={styles.txtForgotPassword}>Lupa Password?</Text>
        </TouchableOpacity>
        <Gap height={30} />
        <Button text="MASUK" />
      </View>
    </View>
  );
};

export default Login;

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
  },
});
