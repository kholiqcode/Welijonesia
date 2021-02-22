import React, { useRef } from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useState } from 'react/cjs/react.development';
import { ICBackActive } from '../../../assets';
import { Gap } from '../../../components';
import {
  boxShadow,
  FONT_BOLD,
  FONT_MEDIUM,
  GRAY_DARK,
  GREEN_DARK,
  GREEN_LIGHT,
  GREEN_MEDIUM,
  GREEN_THIN,
  WHITE,
} from '../../../styles';

const Verification = ({ navigation }) => {
  const RESEND_OTP_TIME_LIMIT = 10;

  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');

  const pin1Ref = useRef();
  const pin2Ref = useRef();
  const pin3Ref = useRef();
  const pin4Ref = useRef();

  const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(RESEND_OTP_TIME_LIMIT);

  let resendOtpTimerInterval;

  // to start resent otp option
  const startResendOtpTimer = () => {
    if (resendOtpTimerInterval) {
      clearInterval(resendOtpTimerInterval);
    }
    resendOtpTimerInterval = setInterval(() => {
      if (resendButtonDisabledTime <= 0) {
        clearInterval(resendOtpTimerInterval);
      } else {
        setResendButtonDisabledTime(resendButtonDisabledTime - 1);
      }
    }, 1000);
  };

  // on click of resend button
  const onResendOtpButtonPress = () => {
    // clear input field
    // setValue('');
    setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
    startResendOtpTimer();

    // resend OTP Api call
    // todo
    console.log('todo: Resend OTP');
  };

  // start timer on screen on launch
  React.useEffect(() => {
    startResendOtpTimer();
    return () => {
      if (resendOtpTimerInterval) {
        clearInterval(resendOtpTimerInterval);
      }
    };
  }, [resendButtonDisabledTime]);

  const _inputNumber = (value, flag) => {
    const completeFlag = `pin${flag}`;
  };

  return (
    <LinearGradient colors={[GREEN_LIGHT, GREEN_MEDIUM]} style={styles.screen}>
      <StatusBar translucent backgroundColor="transparent" />
      <SafeAreaView>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <ICBackActive height="30" width="30" />
        </TouchableOpacity>
      </SafeAreaView>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 50 }}>
          <Text style={{ textAlign: 'center', ...FONT_MEDIUM(14), color: WHITE }}>
            Masukkan kode verifikasi yang telah kami kirim ke nomor 08964758303
          </Text>
        </View>
        <Gap height={20} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <TextInput
            style={{
              backgroundColor: GREEN_THIN,
              height: 50,
              width: 50,
              justifyContent: 'center',
              borderRadius: 30,
              textAlign: 'center',
              ...FONT_BOLD(20),
            }}
            ref={pin1Ref}
            value={pin1}
            autoCompleteType="off"
            keyboardType="phone-pad"
            maxLength={1}
            onChangeText={(value) => {
              setPin1(value);
              if (pin1 !== undefined) pin2Ref.current.focus();
            }}
            onKeyPress={({ nativeEvent }) => {
              nativeEvent.key === 'Backspace' && pin1Ref.current.blur(); // do action : //other action
            }}
          />
          <TextInput
            style={{
              backgroundColor: GREEN_THIN,
              height: 50,
              width: 50,
              justifyContent: 'center',
              borderRadius: 30,
              textAlign: 'center',
              ...FONT_BOLD(20),
            }}
            ref={pin2Ref}
            value={pin2}
            autoCompleteType="off"
            keyboardType="phone-pad"
            maxLength={1}
            onChangeText={(value) => {
              setPin2(value);
              if (pin2 !== undefined) pin3Ref.current.focus();
            }}
            onKeyPress={({ nativeEvent }) => {
              nativeEvent.key === 'Backspace' && pin1Ref.current.focus(); // do action : //other action
            }}
          />
          <TextInput
            style={{
              backgroundColor: GREEN_THIN,
              height: 50,
              width: 50,
              justifyContent: 'center',
              borderRadius: 30,
              textAlign: 'center',
              ...FONT_BOLD(20),
            }}
            ref={pin3Ref}
            value={pin3}
            autoCompleteType="off"
            keyboardType="phone-pad"
            maxLength={1}
            onChangeText={(value) => {
              setPin3(value);
              if (pin3 !== undefined) pin4Ref.current.focus();
            }}
            onKeyPress={({ nativeEvent }) => {
              nativeEvent.key === 'Backspace' && pin2Ref.current.focus(); // do action : //other action
            }}
          />
          <TextInput
            style={{
              backgroundColor: GREEN_THIN,
              height: 50,
              width: 50,
              justifyContent: 'center',
              borderRadius: 30,
              textAlign: 'center',
              ...FONT_BOLD(20),
            }}
            ref={pin4Ref}
            value={pin4}
            autoCompleteType="off"
            keyboardType="phone-pad"
            maxLength={1}
            onChangeText={(value) => {
              setPin4(value);
              if (pin4 !== undefined) pin4Ref.current.blur();
            }}
            onKeyPress={({ nativeEvent }) => {
              nativeEvent.key === 'Backspace' && pin3Ref.current.focus(); // do action : //other action
            }}
          />
        </View>
        <Gap height={30} />
        {resendButtonDisabledTime > 0 ? (
          <TouchableOpacity disabled style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ textAlign: 'center', ...FONT_MEDIUM(14), color: GREEN_THIN }}>
              KIRIM ULANG DALAM {resendButtonDisabledTime} DETIK
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{ justifyContent: 'center', alignItems: 'center' }}
            onPress={() => onResendOtpButtonPress()}
          >
            <Text style={{ textAlign: 'center', ...FONT_MEDIUM(18), color: GREEN_THIN }}>
              KIRIM ULANG
            </Text>
          </TouchableOpacity>
        )}

        <Gap height={30} />
        <TouchableOpacity
          style={{
            backgroundColor: GREEN_THIN,
            paddingVertical: 15,
            paddingHorizontal: 40,
            marginHorizontal: 50,
            borderRadius: 10,
          }}
          onPress={() => onResendOtpButtonPress()}
        >
          <Text style={{ color: GREEN_DARK, ...FONT_BOLD(18), textAlign: 'center' }}>SUBMIT</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Verification;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    height: 40,
    width: 40,
    borderRadius: 15,
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    top: 10 + StatusBar.currentHeight,
    left: 10,
    ...boxShadow(GRAY_DARK, { height: 2, width: 2 }, 5, 1),
  },
  svgWrapper: {
    height: 300,
    backgroundColor: GRAY_DARK,
  },
});
