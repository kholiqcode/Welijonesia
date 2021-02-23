import React, { useRef, useState } from 'react';
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
import { ICBackActive } from '../../../assets';
import { Gap } from '../../../components';
import { activation, logout, resend } from '../../../services';
import {
  boxShadow,
  FONT_BOLD,
  FONT_MEDIUM,
  GRAY_DARK,
  GREEN_DARK,
  GREEN_LIGHT,
  GREEN_MEDIUM,
  GREEN_THIN,
  PRIMARY,
  WHITE,
} from '../../../styles';
import { showMessage } from '../../../utilities';

const Verification = ({ navigation, current }) => {
  const RESEND_OTP_TIME_LIMIT = 120;

  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');

  const pin1Ref = useRef();
  const pin2Ref = useRef();
  const pin3Ref = useRef();
  const pin4Ref = useRef();

  const _handleVerify = async () => {
    if (pin1 === '') {
      showMessage('Tidak boleh ada yang kosong!');
      return pin1Ref.current.focus();
    }
    if (pin2 === '') {
      showMessage('Tidak boleh ada yang kosong!');
      return pin2Ref.current.focus();
    }
    if (pin3 === '') {
      showMessage('Tidak boleh ada yang kosong!');
      return pin3Ref.current.focus();
    }
    if (pin4 === '') {
      showMessage('Tidak boleh ada yang kosong!');
      return pin4Ref.current.focus();
    }
    const code = `${pin1}${pin2}${pin3}${pin4}`;
    const [res, err] = await activation({
      code,
    });
    if (res === undefined) {
      showMessage(err.meta.message ?? 'Aktivasi Gagal!');
    } else {
      showMessage('Akun anda berhasil di verifikasi,silahkan Login!', 'success');
      navigation.navigate('CustomerAuth');
    }
  };

  const _handleResend = async () => {
    const [res, err] = await resend({
      via: 'email',
    });
    if (res === undefined) {
      showMessage(err.meta.message ?? 'Gagal mengirim kode verifikasi!');
    } else {
      showMessage(res.meta.message ?? 'Kode verifikasi telah kami kirim!', 'success');
      pin1Ref.current.focus();
      setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
      startResendOtpTimer();
      _clearForm();
    }
  };

  const _clearForm = () => {
    pin1Ref.current.clear();
    pin2Ref.current.clear();
    pin3Ref.current.clear();
    pin4Ref.current.clear();
  };

  const _submitListener = () => {
    if (pin1 !== '' && pin2 !== '' && pin3 !== '' && pin4 !== '') {
      _handleVerify();
    }
  };

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

  React.useEffect(() => {
    pin1Ref.current.focus();
    return async () => {
      await logout();
    };
  }, [current]);

  // start timer on screen on launch
  React.useEffect(() => {
    startResendOtpTimer();
    return async () => {
      if (resendOtpTimerInterval) {
        clearInterval(resendOtpTimerInterval);
      }
    };
  }, [resendButtonDisabledTime]);

  return (
    <LinearGradient colors={[GREEN_LIGHT, GREEN_MEDIUM]} style={styles.screen}>
      <StatusBar showHideTransition="slide" barStyle="light-content" backgroundColor={PRIMARY} />
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
              _submitListener();
            }}
            onKeyPress={({ nativeEvent }) =>
              nativeEvent.key === 'Backspace' && pin1Ref.current.blur()
            }
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
              _submitListener();
            }}
            onKeyPress={({ nativeEvent }) =>
              nativeEvent.key === 'Backspace' && pin1Ref.current.focus()
            }
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
              _submitListener();
            }}
            onKeyPress={({ nativeEvent }) =>
              nativeEvent.key === 'Backspace' && pin2Ref.current.focus()
            }
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
              _submitListener();
            }}
            onKeyPress={({ nativeEvent }) =>
              nativeEvent.key === 'Backspace' && pin3Ref.current.focus()
            }
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
            onPress={() => _handleResend()}
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
          onPress={() => _handleVerify()}
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
    top: 10,
    left: 10,
    ...boxShadow(GRAY_DARK, { height: 2, width: 2 }, 5, 1),
  },
  svgWrapper: {
    height: 300,
    backgroundColor: GRAY_DARK,
  },
});
