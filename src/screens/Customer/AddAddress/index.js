import React, { useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import { Button, Gap, Input } from '../../../components';
import {
  FONT_BOLD,
  FONT_MEDIUM,
  GRAY_LIGHT,
  GRAY_MEDIUM,
  GRAY_THIN,
  PRIMARY,
  scaleSize,
  SECONDARY,
  WHITE,
} from '../../../styles';

const AddAddress = ({ navigation }) => {
  const sheetRef = React.useRef(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const renderContent = () => (
    <View
      style={{
        backgroundColor: WHITE,
        padding: 16,
        height: scaleSize(windowHeight * 0.8),
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
          <Text style={{ ...FONT_BOLD(26), color: WHITE }}>Add Address</Text>
        </View>
      </View>
      <View style={styles.navigation}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30} />
          <View style={{ paddingHorizontal: 15 }}>
            <Input placeholder="Nama" variant="roundedPill" />
            <Gap height={15} />
            <Input
              placeholder="Kategori Alamat"
              variant="roundedPill"
              select
              rightIcon
              disable
              onPress={() => sheetRef.current.snapTo(0)}
            />
            <Gap height={15} />
            <Input
              placeholder="Provinsi"
              variant="roundedPill"
              select
              rightIcon
              disable
              onPress={() => sheetRef.current.snapTo(0)}
            />
            <Gap height={15} />
            <Input
              placeholder="Kabupaten/Kota"
              variant="roundedPill"
              select
              rightIcon
              disable
              onPress={() => sheetRef.current.snapTo(0)}
            />
            <Gap height={15} />
            <Input
              placeholder="Kecamatan"
              variant="roundedPill"
              select
              rightIcon
              disable
              onPress={() => sheetRef.current.snapTo(0)}
            />
            <Gap height={15} />
            <Input
              placeholder="Desa/Kelurahan"
              variant="roundedPill"
              select
              rightIcon
              disable
              onPress={() => sheetRef.current.snapTo(0)}
            />
            <Gap height={15} />
            <Input
              placeholder="Alamat"
              autoCompleteType="street-address"
              variant="roundedPill"
              multiline
              numberOfLines={4}
            />
            <Gap height={15} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ ...FONT_MEDIUM(14) }}>Set Primary</Text>
              <Switch
                trackColor={{ false: SECONDARY, true: GRAY_MEDIUM }}
                thumbColor={isEnabled ? PRIMARY : WHITE}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>

            <Gap height={15} />
            <Button text="TAMBAH" />
          </View>
        </ScrollView>
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={['50%', 0, '81%']}
        renderContent={renderContent}
        renderHeader={renderHeader}
        enabledInnerScrolling={false}
        initialSnap={1}
      />
    </View>
  );
};

export default AddAddress;

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flex: 0.5,
    backgroundColor: PRIMARY,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 18,
  },
  navigation: {
    flex: 3,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});
