import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ICChatWHite, ILNoPhoto } from '../../../assets';
import { Button, Gap, Input } from '../../../components';
import {
  boxShadow,
  FONT_BOLD,
  FONT_MEDIUM,
  GRAY_DARK,
  GRAY_MEDIUM,
  PRIMARY,
} from '../../../styles';

const Account = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <View style={{ width: '40%', alignItems: 'flex-end' }}>
        <ICChatWHite height={30} width={30} />
      </View>
      <View style={{ width: '40%' }}>
        <Button text="Login" greenDark variant="roundedPill" />
      </View>
    </View>
    <View style={styles.navigation}>
      <View style={styles.myProfil}>
        <View style={styles.photoProfil}>
          <Image
            source={ILNoPhoto}
            style={{
              height: 100,
              width: 100,
            }}
          />
        </View>
        <Gap height={10} />
        <Text style={styles.profilName}> Abdul Kholiq </Text>
        <Gap height={5} />
        <Text style={styles.profilEmail}> welijonesia@gmail.com </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          flex: 1,
          paddingVertical: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('EditProfilCustomer')}>
          <Input placeholder="Edit Profil" variant="roundedPill" more rightIcon disable noBorder />
        </TouchableOpacity>
        <Gap height={20} />
        <TouchableOpacity onPress={() => navigation.navigate('ChangePasswordCustomer')}>
          <Input
            placeholder="Ubah Password"
            variant="roundedPill"
            more
            rightIcon
            disable
            noBorder
          />
        </TouchableOpacity>
        <Gap height={20} />
        <TouchableOpacity onPress={() => navigation.navigate('AddressCustomer')}>
          <Input placeholder="Alamat" variant="roundedPill" more rightIcon disable noBorder />
        </TouchableOpacity>
        <Gap height={20} />
        <TouchableOpacity>
          <Input placeholder="Favorit" variant="roundedPill" more rightIcon disable noBorder />
        </TouchableOpacity>
        <Gap height={20} />
        <TouchableOpacity>
          <Input placeholder="Pengaturan" variant="roundedPill" more rightIcon disable noBorder />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: '25%',
  },
  header: {
    flex: 1,
    backgroundColor: PRIMARY,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 10,
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
    backgroundColor: 'white',
    marginTop: -120 / 2,
    ...boxShadow(GRAY_DARK, { height: -1, width: -1 }, 5, 1),
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  myProfil: {
    borderBottomWidth: 1,
    borderBottomColor: GRAY_MEDIUM,
    paddingBottom: 20,
  },
  profilName: {
    ...FONT_BOLD(18),
  },
  profilEmail: {
    ...FONT_MEDIUM(14),
  },
});
