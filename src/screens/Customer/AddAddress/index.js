import React, { memo, useCallback, useEffect, useState } from 'react';
import {
  Dimensions,
  Keyboard,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';
import { Button, Gap, Input } from '../../../components';
import {
  getAddresses,
  getCities,
  getDistricts,
  getVillages,
  storeAddress,
} from '../../../services';
import { getProvinces } from '../../../services/province';
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
import { showMessage } from '../../../utilities';

const AddAddress = ({ navigation }) => {
  const sheetRef = React.useRef(null);
  const [primary, setPrimary] = useState(false);
  const [selectProvince, setSelectProvince] = useState(false);
  const [selectCity, setSelectCity] = useState(false);
  const [selectDistrict, setSelectDistrict] = useState(false);
  const [selectVillage, setSelectVillage] = useState(false);
  const [listBottomSheet, setListBottomSheet] = useState([]);
  const [search, setSearch] = useState('');
  const [addressName, setAddressName] = useState('');
  const [address, setAddress] = useState('');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [village, setVillage] = useState('');
  const toggleSwitch = () => setPrimary((previousState) => !previousState);
  const { isError, message } = useSelector((state) => state.globalReducer);
  const { provinces } = useSelector((state) => state.provinceReducer);
  const { cities } = useSelector((state) => state.cityReducer);
  const { districts } = useSelector((state) => state.districtReducer);
  const { villages } = useSelector((state) => state.villageReducer);

  const formValidation = async () => {
    console.log(addressName);
    console.log(village);
    console.log(address);
    if (addressName === '' || addressName === undefined) {
      return { status: false, message: 'Nama tidak boleh kosong' };
    }
    if (village === '' || village === undefined) {
      return { status: false, message: 'Desa/Kecamatan tidak boleh kosong' };
    }
    if (address === '' || address === undefined) {
      return { status: false, message: 'Alamat tidak boleh kosong' };
    }
  };

  useEffect(() => {
    if (selectCity) return setListBottomSheet(cities);
    if (selectProvince) return setListBottomSheet(provinces);
    if (selectDistrict) return setListBottomSheet(districts);
    if (selectVillage) return setListBottomSheet(villages);
  }, [provinces, cities, districts, villages]);

  useEffect(() => {
    _handleGetProvince();
  }, []);

  const _handleStoreAddress = useCallback(async () => {
    const validator = await formValidation();
    if (validator?.status === false) return showMessage(validator.message);
    await storeAddress({
      village: village?.id,
      name: addressName,
      address,
      status: primary ? 1 : 0,
    });
    if (isError) {
      showMessage(message);
    }
    showMessage(message, 'success');

    await getAddresses();
    await navigation.goBack();
  }, [addressName, address, village, primary, message, isError]);

  const _handleGetProvince = async () => {
    await getProvinces();
  };

  const _handleGetCity = useCallback(async () => {
    if (province?.id !== undefined) await getCities({ province: province?.id });
  }, [province]);

  const _handleGetDistrict = useCallback(async () => {
    if (city?.id !== undefined) await getDistricts({ city: city?.id });
  }, [city]);

  const _handleGetVillage = useCallback(async () => {
    if (district?.id !== undefined) await getVillages({ district: district?.id });
  }, [district]);

  const _handleSearching = useCallback(
    (value) => {
      setSearch(value);
      let searched;
      if (selectProvince) {
        searched = provinces.filter((province) =>
          province.name.toLowerCase().includes(value.toLowerCase()),
        );
      }
      if (selectCity) {
        searched = cities.filter((city) => city.name.toLowerCase().includes(value.toLowerCase()));
      }
      if (selectDistrict) {
        searched = districts.filter((district) =>
          district.name.toLowerCase().includes(value.toLowerCase()),
        );
      }
      if (selectVillage) {
        searched = villages.filter((village) =>
          village.name.toLowerCase().includes(value.toLowerCase()),
        );
      }
      setListBottomSheet(searched);
    },
    [listBottomSheet],
  );

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
      {selectProvince &&
        listBottomSheet &&
        listBottomSheet?.map((_province, index) => (
          <TouchableOpacity
            style={{
              padding: 10,
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: GRAY_THIN,
            }}
            onPress={async () => {
              sheetRef.current.snapTo(1);
              setProvince({ id: _province.id, name: _province.name });
              setCity('');
              setDistrict('');
              setVillage('');
              setListBottomSheet(null);
            }}
            key={index.toString()}
          >
            <Text style={{ ...FONT_MEDIUM(14) }}>{_province.name}</Text>
          </TouchableOpacity>
        ))}
      {selectCity &&
        listBottomSheet &&
        listBottomSheet?.map((_city, index) => (
          <TouchableOpacity
            style={{
              padding: 10,
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: GRAY_THIN,
            }}
            onPress={async () => {
              sheetRef.current.snapTo(1);
              setDistrict('');
              setVillage('');
              setListBottomSheet(null);
              setCity({ id: _city.id, name: _city.name });
            }}
            key={index.toString()}
          >
            <Text style={{ ...FONT_MEDIUM(14) }}>{_city.name}</Text>
          </TouchableOpacity>
        ))}
      {selectDistrict &&
        listBottomSheet &&
        listBottomSheet?.map((_district, index) => (
          <TouchableOpacity
            style={{
              padding: 10,
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: GRAY_THIN,
            }}
            onPress={async () => {
              sheetRef.current.snapTo(1);
              setVillage('');
              setListBottomSheet(null);
              setDistrict({ id: _district.id, name: _district.name });
            }}
            key={index.toString()}
          >
            <Text style={{ ...FONT_MEDIUM(14) }}>{_district.name}</Text>
          </TouchableOpacity>
        ))}
      {selectVillage &&
        listBottomSheet &&
        listBottomSheet?.map((_village, index) => (
          <TouchableOpacity
            style={{
              padding: 10,
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: GRAY_THIN,
            }}
            onPress={async () => {
              sheetRef.current.snapTo(1);
              setListBottomSheet(null);
              setVillage({ id: _village.id, name: _village.name });
            }}
            key={index.toString()}
          >
            <Text style={{ ...FONT_MEDIUM(14) }}>{_village.name}</Text>
          </TouchableOpacity>
        ))}
    </View>
  );

  const renderHeader = () => (
    <View
      style={{
        width: '100%',
        backgroundColor: WHITE,
        justifyContent: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderColor: GRAY_THIN,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        paddingTop: 10,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          width: '20%',
          height: 3,
          backgroundColor: GRAY_MEDIUM,
          borderRadius: 5,
          alignSelf: 'center',
        }}
      />
      <Gap height={5} />
      <View
        style={{
          width: '20%',
          height: 3,
          backgroundColor: GRAY_MEDIUM,
          borderRadius: 5,
          alignSelf: 'center',
        }}
      />
      <Gap height={10} />
      <Input
        placeholder="Cari metode pembayaran"
        variant="roundedPill"
        search
        rightIcon
        noBorder
        number
        value={search}
        onChangeText={(value) => {
          _handleSearching(value);
          sheetRef.current.snapTo(0);
        }}
        onFocus={() => sheetRef.current.snapTo(0)}
      />
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
            <Input
              placeholder="Nama"
              variant="roundedPill"
              value={addressName}
              onChangeText={(value) => {
                // console.log(value);
                setAddressName(value);
              }}
            />
            <Gap height={15} />
            <Input
              placeholder="Provinsi"
              variant="roundedPill"
              select
              rightIcon
              disable
              value={province?.name}
              onPress={() => {
                _handleGetProvince();
                setSelectProvince(true);
                sheetRef.current.snapTo(0);
              }}
            />
            <Gap height={15} />
            <Input
              placeholder="Kabupaten/Kota"
              variant="roundedPill"
              select
              rightIcon
              disable
              value={city?.name}
              onPress={() => {
                _handleGetCity();
                setSelectCity(true);
                sheetRef.current.snapTo(0);
              }}
            />
            <Gap height={15} />
            <Input
              placeholder="Kecamatan"
              variant="roundedPill"
              select
              rightIcon
              disable
              value={district?.name}
              onPress={() => {
                _handleGetDistrict();
                setSelectDistrict(true);
                sheetRef.current.snapTo(0);
              }}
            />
            <Gap height={15} />
            <Input
              placeholder="Desa/Kelurahan"
              variant="roundedPill"
              select
              rightIcon
              disable
              value={village?.name}
              onPress={() => {
                _handleGetVillage();
                setSelectVillage(true);
                sheetRef.current.snapTo(0);
              }}
            />
            <Gap height={15} />
            <Input
              placeholder="Alamat"
              autoCompleteType="street-address"
              variant="roundedPill"
              multiline
              numberOfLines={4}
              value={address}
              onChangeText={(value) => setAddress(value)}
            />
            <Gap height={15} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ ...FONT_MEDIUM(14) }}>Set Primary</Text>
              <Switch
                trackColor={{ false: SECONDARY, true: GRAY_MEDIUM }}
                thumbColor={primary ? PRIMARY : WHITE}
                onValueChange={toggleSwitch}
                value={primary}
              />
            </View>

            <Gap height={15} />
            <Button text="SIMPAN" onPress={() => _handleStoreAddress()} />
          </View>
        </ScrollView>
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={['50%', 0, '81%']}
        renderContent={renderContent}
        renderHeader={renderHeader}
        enabledInnerScrolling
        initialSnap={1}
        onCloseEnd={() => {
          setListBottomSheet(null);
          setSelectProvince(false);
          setSelectCity(false);
          setSelectDistrict(false);
          setSelectVillage(false);
        }}
        onCloseStart={() => {
          Keyboard.dismiss();
          setSearch(null);
        }}
      />
    </View>
  );
};

export default memo(AddAddress);

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
