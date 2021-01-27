import React from 'react';
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

const EditProfil = ({ navigation }) => {
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
        height: scaleSize(40),
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
          <Input placeholder="Nama Lengkap" variant="roundedPill" />
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
            placeholder="Telepon"
            autoCompleteType="tel"
            keyboardType="phone-pad"
            variant="roundedPill"
          />
          <Gap height={30} />
          <Button text="SIMPAN" />
        </View>
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={['25%', 0]}
        renderContent={renderContent}
        renderHeader={renderHeader}
        enabledInnerScrolling={false}
        initialSnap={1}
      />
    </View>
  );
};

export default EditProfil;

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
