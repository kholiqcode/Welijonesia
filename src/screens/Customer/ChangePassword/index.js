import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
    <View style={styles.container}>
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
        <View style={styles.photoProfil}>
          <Image source={ILNoPhoto} style={styles.avatar} />
        </View>
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
    flex: 1,
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
  photoProfil: {
    borderRadius: 120 / 2,
    height: 120,
    width: 120,
    backgroundColor: WHITE,
    marginTop: -120 / 2,
    ...boxShadow(GRAY_DARK, { height: -1, width: -1 }, 5, 1),
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'relative',
  },
  avatar: {
    height: 100,
    width: 100,
    backgroundColor: WHITE,
    borderRadius: 100 / 2,
    zIndex: 0,
  },
});
