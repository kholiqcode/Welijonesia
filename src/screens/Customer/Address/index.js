import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { ICPlusOutline } from '../../../assets';
import { Button, Gap } from '../../../components';
import { getAddresses } from '../../../services';
import { FONT_BOLD, FONT_MEDIUM, FONT_REGULAR, PRIMARY, WHITE } from '../../../styles';

const Address = ({ navigation }) => {
  const { addresses } = useSelector((state) => state.addressReducer);

  useEffect(() => {
    _handleGetAddress();
  }, []);

  const _handleGetAddress = async () => {
    await getAddresses();
  };
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
          <Text style={{ ...FONT_BOLD(26), color: WHITE }}>Address</Text>
        </View>
      </View>
      <View style={styles.navigation}>
        <Gap height={20} />
        <TouchableOpacity
          style={{ paddingHorizontal: 15 }}
          onPress={() => navigation.navigate('AddAddressCustomer')}
        >
          <View style={styles.cardAddressAdd}>
            <ICPlusOutline height={60} width={60} />
          </View>
        </TouchableOpacity>
        <Gap height={20} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={15} />
          {addresses &&
            addresses.map((address) => (
              <View key={address.id}>
                <View style={styles.cardAddress}>
                  <Text style={styles.address}>{address.address}</Text>
                  <Gap width={5} />
                  <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                    <Button
                      btnIcon="editAddress"
                      onPress={() => navigation.navigate('AddAddressCustomer')}
                    />
                    <Gap width={5} />
                    <Button btnIcon="trash" />
                  </View>
                </View>
                <Gap height={15} />
              </View>
            ))}
          {/* 
          <View style={styles.cardAddress}>
            <Text style={styles.addressStatus}>Primary</Text>
            <Text style={styles.address}>
              Shinta Mauliantika, 082244016472, RT 003/RW 006, Desa Buduan Utara, Kec. Suboh, Kab.
              Situbondo
            </Text>
            <Gap width={5} />
            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
              <Button btnIcon="editAddress" />
              <Gap width={5} />
              <Button btnIcon="trash" />
            </View>
          </View>
          <Gap height={15} />
          <View style={styles.cardAddress}>
            <Text style={styles.address}>
              Shinta Mauliantika, 082244016472, RT 003/RW 006, Desa Buduan Utara, Kec. Suboh, Kab.
              Situbondo
            </Text>
            <Gap width={5} />
            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
              <Button btnIcon="editAddress" />
              <Gap width={5} />
              <Button btnIcon="trash" />
            </View>
          </View>
          <Gap height={15} />
          <View style={styles.cardAddress}>
            <Text style={styles.address}>
              Shinta Mauliantika, 082244016472, RT 003/RW 006, Desa Buduan Utara, Kec. Suboh, Kab.
              Situbondo
            </Text>
            <Gap width={5} />
            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
              <Button btnIcon="editAddress" />
              <Gap width={5} />
              <Button btnIcon="trash" />
            </View>
          </View> */}
          <Gap height={15} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 10,
  },
  cardAddress: {
    borderRadius: 15,
    backgroundColor: WHITE,
    padding: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    maxWidth: '100%',
    paddingVertical: 30,
    // ...boxShadow(GRAY_DARK, { height: 1, width: 1 }, 5, 0.5),
  },
  cardAddressAdd: {
    borderRadius: 15,
    backgroundColor: WHITE,
    padding: 15,
    flexDirection: 'row',
    maxWidth: '100%',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    // ...boxShadow(GRAY_DARK, { height: 1, width: 1 }, 5, 0.5),
  },
  address: {
    flex: 1,
    ...FONT_MEDIUM(14),
    textAlignVertical: 'center',
  },
  addressAdd: {
    flex: 1,
    ...FONT_MEDIUM(14),
    textAlignVertical: 'center',
  },
  addressStatus: {
    ...FONT_REGULAR(14),
    top: 0,
    right: 0,
    position: 'absolute',
    backgroundColor: PRIMARY,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 1,
    color: WHITE,
  },
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
    paddingVertical: 10,
  },
});
