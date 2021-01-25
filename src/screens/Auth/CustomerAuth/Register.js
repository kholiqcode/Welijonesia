import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react/cjs/react.development';
import BottomSheet from 'reanimated-bottom-sheet';
import { Button, Gap, Input } from '../../../components';
import {
  FONT_MEDIUM,
  FONT_REGULAR,
  GRAY_LIGHT,
  GRAY_MEDIUM,
  GRAY_THIN,
  PRIMARY,
  WHITE,
} from '../../../styles';

const Register = ({ handleSetActivation }) => {
  const [hidePasswrd, setHidePassword] = useState(true);
  const sheetRef = React.useRef(null);

  const renderContent = () => (
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
      <TouchableOpacity
        style={{
          padding: 10,
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: GRAY_THIN,
        }}
        onPress={() => sheetRef.current.snapTo(1)}
      >
        <Text style={{ ...FONT_MEDIUM(14) }}>Laki-Laki</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 10,
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: GRAY_THIN,
        }}
        onPress={() => sheetRef.current.snapTo(1)}
      >
        <Text style={{ ...FONT_MEDIUM(14) }}>Perempuan</Text>
      </TouchableOpacity>
    </View>
  );

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
      <View>
        <Gap height={15} />
        <Text style={styles.screenTitle}>REGISTER WELIJONESIA</Text>
        <Gap height={20} />
        <Input placeholder="Name" autoCompleteType="name" variant="roundedPill" />
        <Gap height={15} />
        <Input
          placeholder="Jenis Kelamin"
          variant="roundedPill"
          select
          rightIcon
          disable
          onPress={() => sheetRef.current.snapTo(0)}
        />
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
        <Button text="DAFTAR" onPress={() => handleSetActivation(true)} />
        <BottomSheet
          ref={sheetRef}
          snapPoints={['25%', 0]}
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
