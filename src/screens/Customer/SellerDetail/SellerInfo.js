import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { Rating } from 'react-native-ratings';
import { ILNoPhoto } from '../../../assets';
import { Button, Gap } from '../../../components';
import { FONT_BOLD, FONT_MEDIUM, FONT_REGULAR, SECONDARY, WHITE } from '../../../styles';

const SellerInfo = () => (
  <View style={styles.container}>
    <View style={styles.sellerContact}>
      <View style={styles.horizontalContactWrapper}>
        <View style={styles.contactItem}>
          <Button btnIcon="motor" disabled />
          <Text style={styles.textContactItem} numberOfLines={1}>
            Keliling
          </Text>
        </View>
        <View style={styles.contactItem}>
          <Button btnIcon="home-active" disabled />
          <Text style={styles.textContactItem} numberOfLines={1}>
            Jln Nias 3 No 5
          </Text>
        </View>
      </View>
      <View style={styles.horizontalContactWrapper}>
        <View style={styles.contactItem}>
          <Button btnIcon="phone" disabled />
          <Text style={styles.textContactItem} numberOfLines={1}>
            +6200000000
          </Text>
        </View>
        <View style={styles.contactItem}>
          <Button btnIcon="email" disabled />
          <Text style={styles.textContactItem} numberOfLines={1}>
            kholiqbisnis@gmail.com
          </Text>
        </View>
      </View>
      <View style={styles.horizontalContactWrapper}>
        <View style={styles.contactItem}>
          <Button btnIcon="marker" disabled />
          <Text style={styles.textContactItem} numberOfLines={1}>
            Jln AHmad Yani
          </Text>
        </View>
      </View>
    </View>
    <FlatList
      style={styles.ratingWrapper}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      stickyHeaderIndices={[0]}
      scrollEnabled
      data={[0, 1, 2, 3, 4, 5]}
      ListHeaderComponent={() => (
        <View style={styles.ratingHeader}>
          <Text style={styles.ratingTitle}>Rating dan Ulasan</Text>
          <Button btnIcon="right" />
        </View>
      )}
      renderItem={({ item }) => (
        <View style={{ marginBottom: 15 }}>
          <View style={styles.customerProfil}>
            <Image source={ILNoPhoto} style={styles.customerPhoto} />
            <Text style={styles.customerName}>Dinda</Text>
          </View>
          <Gap height={6} />
          <View style={styles.customerRate}>
            <Rating ratingCount={5} startingValue={3} imageSize={15} readonly fractions={2} />
            <Text style={styles.customerDateRate}>12/20/2020</Text>
          </View>
          <Gap height={6} />
          <View>
            <Text style={styles.textCustomerReview} numberOfLines={2} ellipsizeMode="tail">
              Halo
            </Text>
          </View>
        </View>
      )}
    />
  </View>
);

export default SellerInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  sellerContact: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingBottom: 15,
  },
  horizontalContactWrapper: {
    paddingTop: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  textContactItem: {
    ...FONT_REGULAR(12),
    paddingLeft: 10,
    flexShrink: 1,
  },

  // Rating
  ratingWrapper: {
    backgroundColor: WHITE,
    paddingHorizontal: 10,
  },
  ratingTitle: {
    ...FONT_BOLD(18),
  },
  ratingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: WHITE,
  },
  customerProfil: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  customerPhoto: {
    height: 25,
    width: 25,
  },
  customerName: {
    marginLeft: 10,
    ...FONT_MEDIUM(14),
  },
  textCustomerReview: {
    ...FONT_REGULAR(14),
    color: SECONDARY,
  },
  customerRate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  customerDateRate: {
    marginLeft: 10,
    ...FONT_REGULAR(12),
  },
});
