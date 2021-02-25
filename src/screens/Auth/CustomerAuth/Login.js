import React, { createRef, useState, useEffect } from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SmsRetriever from 'react-native-sms-retriever';
import { ICBackCircle } from '../../../assets';
import { Button, Gap, Input } from '../../../components';
import { login } from '../../../services';
import { FONT_MEDIUM, FONT_REGULAR, PRIMARY, WHITE } from '../../../styles';
import { showMessage, validateEmail } from '../../../utilities';

const Login = ({ handleSetForgot, navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = createRef();
  const passwordRef = createRef();

  // Get the SMS message (second gif)
  const _onSmsListenerPressed = async () => {
    try {
      const registered = await SmsRetriever.startSmsRetriever();
      console.log(registered);
      if (registered) {
        SmsRetriever.addSmsListener((event) => {
          console.log(event);
          SmsRetriever.removeSmsListener();
        });
      }
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  useEffect(() => {
    // _onSmsListenerPressed();
  }, []);

  const _handleLogin = async () => {
    if (email === '') {
      showMessage('Email harus diisi!');
      return emailRef.current.focus();
    }
    if (password === '') {
      showMessage('Password harus diisi!');
      return passwordRef.current.focus();
    }
    if (!validateEmail(email)) {
      showMessage('Email tidak valid!');
      return emailRef.current.focus();
    }
    try {
      await login({ email, password });
      navigation.reset({ index: 0, routes: [{ name: 'CustomerMainScreen' }] });
    } catch (error) {
      showMessage(error.meta.message ?? 'Login Gagal!');
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <Text style={styles.screenTitle}>LOGIN WELIJONESIA</Text>
        <Gap height={30} />
        <Input
          forwardedRef={emailRef}
          placeholder="Email"
          autoCompleteType="email"
          keyboardType="email-address"
          variant="roundedPill"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <Gap height={15} />
        <Input
          forwardedRef={passwordRef}
          placeholder="Password"
          secureTextEntry
          autoCompleteType="password"
          variant="roundedPill"
          hidePassword={hidePassword}
          onPress={() => setHidePassword(!hidePassword)}
          rightIcon
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        <Gap height={30} />
        <TouchableOpacity>
          <Text style={styles.txtForgotPassword} onPress={() => handleSetForgot(true)}>
            Lupa Password?
          </Text>
        </TouchableOpacity>
        <Gap height={30} />
        <Button text="MASUK" onPress={() => _handleLogin()} />
        <Gap height={30} />
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => _onSmsListenerPressed()}>
          <ICBackCircle height={50} width={50} />
        </TouchableOpacity>
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
