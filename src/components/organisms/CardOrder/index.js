import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import indonesianLocale from 'moment/locale/id';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ICChat, ICDownCircle, ICLink, ICUpCircle } from '../../../assets';
import { FONT_MEDIUM, FONT_REGULAR, GRAY_DARK, GRAY_THIN, PRIMARY, WHITE } from '../../../styles';
import { Button, Gap } from '../../atoms';
import { OrderItem } from '../../molecules';

const CardOrder = ({ order }) => {
  const [expand, setExpand] = useState(false);
  const navigation = useNavigation();
  return (
    <View
      style={{
        borderRadius: 15,
        paddingHorizontal: 20,
        backgroundColor: WHITE,
        paddingVertical: 10,
      }}
    >
      <View
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          padding: 7,
          backgroundColor: PRIMARY,
          borderBottomStartRadius: 15,
          borderTopEndRadius: 15,
        }}
      >
        <Text style={{ ...FONT_MEDIUM(10), color: WHITE }}>Diproses</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ ...FONT_MEDIUM(16), color: GRAY_DARK }}>
            #TRX{moment(order?.created_at).unix()}
          </Text>
          <Gap height={5} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={{ uri: order?.seller?.picturePath }}
              style={{ height: 35, width: 35, borderRadius: 30 }}
            />
            <Gap width={10} />
            <Text style={{ ...FONT_MEDIUM(16) }}>{order?.seller?.name}</Text>
          </View>
          <Text style={{ ...FONT_MEDIUM(12), marginTop: 10, color: GRAY_DARK }}>
            {moment(order.created_at).local(indonesianLocale).format('LLL')}
          </Text>
        </View>
        {expand ? (
          <View style={styles.sellerNav}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('SellerDetail', {
                  id: order?.seller?.id,
                })
              }
            >
              <ICLink height={24} width={24} />
            </TouchableOpacity>
            <Gap width={15} />
            <TouchableOpacity>
              <ICChat height={24} width={24} />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={{ marginRight: 5 }} onPress={() => setExpand(true)}>
            <ICDownCircle height={40} width={40} />
          </TouchableOpacity>
        )}
      </View>

      {/* Content Section */}
      {expand && (
        <View>
          <View style={styles.sectionWrapper}>
            <Gap height={10} />
            <View style={styles.orderList}>
              {order?.orderdetails?.map((orderDetail, index) => (
                <OrderItem orderdetail={orderDetail} key={index.toString()} />
              ))}
            </View>
          </View>
          <View style={styles.sectionWrapper}>
            <View style={styles.subTitleWrapper}>
              <Text style={styles.subTitle}>Pembayaran</Text>
            </View>
            <View style={styles.valueWrapper}>
              <Text>Cash/Tunai</Text>
            </View>
          </View>
          <View style={styles.sectionWrapper}>
            <View style={styles.subTitleWrapper}>
              <Text style={styles.subTitle}>Pengiriman</Text>
            </View>
            <View style={styles.valueWrapper}>
              <Text style={{ ...FONT_REGULAR(14) }}>
                {order?.shipping_method === 0 ? 'Diantar' : 'Ambil Sendiri'}
              </Text>
            </View>
          </View>
          {order?.shipping_method === 0 && (
            <View style={styles.sectionWrapper}>
              <View style={styles.subTitleWrapper}>
                <Text style={styles.subTitle}>Alamat</Text>
              </View>
              <View>
                <Text numberOfLines={3}>{order?.customer_address}</Text>
              </View>
            </View>
          )}

          <View style={styles.sectionTotalWrapper}>
            <Text style={styles.subTitle}>Total Pesanan</Text>
            <Text style={styles.subTitle}>Rp {order?.billing?.total}</Text>
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Button text="Batalkan Pesanan" danger />
          </View>
          <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => setExpand(false)}>
            <ICUpCircle height={40} width={40} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CardOrder;

const styles = StyleSheet.create({
  sectionWrapper: {
    paddingBottom: 8,
    borderBottomColor: GRAY_THIN,
    borderBottomWidth: 2,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitleWrapper: {
    justifyContent: 'center',
    paddingTop: 5,
  },
  valueWrapper: {
    height: 30,
    justifyContent: 'center',
  },
  sectionTotalWrapper: {
    paddingBottom: 8,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  sellerWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: WHITE,
  },
  sellerProfil: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sellerPhoto: {
    height: 35,
    width: 35,
  },
  sellerNav: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' },
  sellerNavBtn: {
    backgroundColor: '#BFFCBF',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 30 / 2,
    width: 80,
    alignItems: 'center',
  },
  sellerNavLabel: {
    fontSize: 12,
  },
});
