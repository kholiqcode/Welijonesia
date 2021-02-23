import React, { useState, createRef } from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import { Button, Gap, Input } from '../../../components';
import { register } from '../../../services';
import {
  FONT_MEDIUM,
  FONT_REGULAR,
  GRAY_LIGHT,
  GRAY_MEDIUM,
  GRAY_THIN,
  PRIMARY,
  WHITE,
} from '../../../styles';
import { showMessage, validateEmail } from '../../../utilities';

const Register = ({ navigation }) => {
  const [hidePasswrd, setHidePassword] = useState(true);
  const sheetRef = React.useRef(null);
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const nameRef = createRef();
  const emailRef = createRef();
  const phoneRef = createRef();
  const genderRef = createRef();
  const passwordRef = createRef();
  const passwordConfirmationRef = createRef();

  const initialGender = [
    {
      id: 0,
      label: 'Pilih Jenis Kelamin',
      value: 'default',
    },
    {
      id: 1,
      label: 'Laki-laki',
      value: 'L',
    },
    {
      id: 2,
      label: 'Perempuan',
      value: 'P',
    },
  ];

  const _handleRegister = async () => {
    if (name === '') {
      showMessage('Nama harus diisi!');
      return nameRef.current.focus();
    }
    if (gender === '') {
      showMessage('Gender harus diisi!');
      return genderRef.current.focus();
    }
    if (phone === '') {
      showMessage('Telepon harus diisi!');
      return phoneRef.current.focus();
    }
    if (email === '') {
      showMessage('Email harus diisi!');
      return emailRef.current.focus();
    }
    if (password === '') {
      showMessage('Password harus diisi!');
      return passwordRef.current.focus();
    }
    if (passwordConfirmation === '') {
      showMessage('Konfirmasi Password harus diisi!');
      return passwordConfirmationRef.current.focus();
    }
    if (!validateEmail(email)) {
      showMessage('Email tidak valid!');
      return emailRef.current.focus();
    }
    if (password !== passwordConfirmation) {
      showMessage('Konfirmasi password tidak sama!');
      return passwordConfirmationRef.current.focus();
    }
    try {
      await register({
        name,
        gender,
        phone,
        email,
        password,
        password_confirmation: passwordConfirmation,
      });
      navigation.navigate('Verification');
    } catch (error) {
      showMessage(error.meta.message ?? 'Registrasi Gagal, Periksa Kembali!');
      console.log(error);
    }
  };

  const renderContent = () => {
    const _onSelect = ({ value }) => {
      sheetRef.current.snapTo(1);
      setGender(value);
    };

    return (
      <View
        style={{
          backgroundColor: WHITE,
          padding: 16,
          height: 300,
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderLeftColor: GRAY_LIGHT,
          borderRightColor: GRAY_LIGHT,
        }}
      >
        {initialGender.map((item, index) => (
          <TouchableOpacity
            style={{
              padding: 10,
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: GRAY_THIN,
            }}
            onPress={() => _onSelect(item)}
            key={index}
          >
            <Text style={{ ...FONT_MEDIUM(14) }}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderHeader = () => (
    <View
      style={{
        width: '100%',
        backgroundColor: WHITE,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderColor: GRAY_THIN,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
      }}
    >
      <View style={{ width: '20%', height: 3, backgroundColor: GRAY_MEDIUM, borderRadius: 5 }} />
      <Gap height={5} />
      <View style={{ width: '20%', height: 3, backgroundColor: GRAY_MEDIUM, borderRadius: 5 }} />
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <Gap height={15} />
        <Text style={styles.screenTitle}>REGISTER WELIJONESIA</Text>
        <Gap height={20} />
        <Input
          forwardedRef={nameRef}
          placeholder="Name"
          autoCompleteType="name"
          variant="roundedPill"
          value={name}
          onChangeText={(value) => setname(value)}
        />
        <Gap height={15} />
        <Input
          forwardedRef={genderRef}
          placeholder="Jenis Kelamin"
          variant="roundedPill"
          select
          rightIcon
          disable
          onPress={() => sheetRef.current.snapTo(0)}
          value={gender}
        />
        <Gap height={15} />
        <Input
          forwardedRef={phoneRef}
          placeholder="Telepon"
          autoCompleteType="tel"
          keyboardType="phone-pad"
          variant="roundedPill"
          value={phone}
          onChangeText={(value) => setPhone(value)}
        />
        <Gap height={15} />
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
          hidePassword={hidePasswrd}
          onPress={() => setHidePassword(!hidePasswrd)}
          rightIcon
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        <Gap height={15} />
        <Input
          forwardedRef={passwordConfirmationRef}
          placeholder="Konfirmasi Password"
          secureTextEntry
          autoCompleteType="password"
          variant="roundedPill"
          hidePassword={hidePasswrd}
          onPress={() => setHidePassword(!hidePasswrd)}
          rightIcon
          value={passwordConfirmation}
          onChangeText={(value) => setPasswordConfirmation(value)}
        />
        <Gap height={30} />
        <Button text="DAFTAR" onPress={() => _handleRegister()} />
        <BottomSheet
          ref={sheetRef}
          snapPoints={['45%', 0]}
          renderContent={renderContent}
          renderHeader={renderHeader}
          enabledInnerScrolling={false}
          initialSnap={1}
        />
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
