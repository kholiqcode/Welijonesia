import React, { useState } from 'react';
import {
  Image,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import BottomSheet from 'reanimated-bottom-sheet';
import { ILNoPhoto } from '../../../assets';
import { Button, Gap, Input } from '../../../components';
import {
  boxShadow,
  FONT_BOLD,
  FONT_MEDIUM,
  GRAY_DARK,
  GRAY_LIGHT,
  GRAY_MEDIUM,
  GRAY_THIN,
  PRIMARY,
  scaleSize,
  WHITE,
} from '../../../styles';

const ChangePassword = ({ navigation }) => {
  const [hidePasswrd, setHidePassword] = useState(true);

  return (
    <View style={styles.container} onStartShouldSetResponder={() => Keyboard.dismiss()}>
      <View style={styles.header}>
        <Button btnIcon="back" onPress={() => navigation.goBack()} />
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ ...FONT_BOLD(26), color: WHITE }}>CHANGE PASSWORD</Text>
        </View>
      </View>
      <View style={styles.navigation}>
        <Gap height={40} />
        <View style={{ paddingHorizontal: 15 }}>
          <Input
            placeholder="Password Lama"
            secureTextEntry
            autoCompleteType="password"
            variant="roundedPill"
            hidePassword={hidePasswrd}
            onPress={() => setHidePassword(!hidePasswrd)}
          />
          <Gap height={15} />
          <Input
            placeholder="Password Baru"
            secureTextEntry
            autoCompleteType="password"
            variant="roundedPill"
            hidePassword={hidePasswrd}
            onPress={() => setHidePassword(!hidePasswrd)}
            rightIcon
          />
          <Gap height={15} />
          <Input
            placeholder="Konfirmasi Password Baru"
            secureTextEntry
            autoCompleteType="password"
            variant="roundedPill"
            hidePassword={hidePasswrd}
            onPress={() => setHidePassword(!hidePasswrd)}
          />
          <Gap height={40} />
          <Button text="SIMPAN" />
        </View>
      </View>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flex: 0.8,
    backgroundColor: PRIMARY,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 18,
  },
  navigation: {
    flex: 3,
    paddingHorizontal: 10,
    paddingBottom: '20%',
  },
  avatar: {
    height: 100,
    width: 100,
    backgroundColor: WHITE,
    borderRadius: 100 / 2,
    zIndex: 0,
  },
});
