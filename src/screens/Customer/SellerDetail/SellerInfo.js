import moment from 'moment';
import indonesianLocale from 'moment/locale/id';
import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { Rating } from 'react-native-ratings';
import { useSelector } from 'react-redux';
import { ILNoPhoto } from '../../../assets';
import { Button, Gap } from '../../../components';
import { getReviews } from '../../../services';
import { FONT_BOLD, FONT_MEDIUM, FONT_REGULAR, SECONDARY, WHITE } from '../../../styles';

const SellerInfo = ({ seller }) => {
  const { type, rutedetails, user, id } = seller;
  const rute = useMemo(() => rutedetails?.map((item) => item.rute.name), rutedetails);
  const { reviews } = useSelector((state) => state.reviewReducer);
  const { currentPage, lastPage } = useSelector((state) => state.globalReducer);

  const _handleGetReview = useCallback(async () => {
    if (currentPage === lastPage) return null;
    await getReviews({ page: currentPage, seller_id: id });
  }, [reviews]);

  useEffect(() => {
    _handleGetReview();
  }, [id]);

  return (
    <View style={styles.container}>
      <View style={styles.sellerContact}>
        <View style={styles.horizontalContactWrapper}>
          <View style={styles.contactItem}>
            <Button btnIcon="motor" disabled />
            <Text style={styles.textContactItem} numberOfLines={1}>
              {type}
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
              0{user?.phone}
            </Text>
          </View>
          <View style={styles.contactItem}>
            <Button btnIcon="email" disabled />
            <Text style={styles.textContactItem} numberOfLines={1}>
              {user?.email}
            </Text>
          </View>
        </View>
        <View style={styles.horizontalContactWrapper}>
          <View style={styles.contactItem}>
            <Button btnIcon="marker" disabled />
            <Text style={styles.textContactItem} numberOfLines={1}>
              {rute?.length !== 0 ? rute?.join(' => ') : 'Penjual ini belum memiliki rute'}
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
        data={reviews}
        ListHeaderComponent={() => (
          <View style={styles.ratingHeader}>
            <Text style={styles.ratingTitle}>Rating dan Ulasan</Text>
            <Button btnIcon="right" />
          </View>
        )}
        ListEmptyComponent={() => (
          <View>
            <Text>Penjual ini tidak memiliki ulasan apapun.</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 15 }}>
            <View style={styles.customerProfil}>
              <Image source={ILNoPhoto} style={styles.customerPhoto} />
              <Text style={styles.customerName}>{item.user?.name}</Text>
            </View>
            <Gap height={6} />
            <View style={styles.customerRate}>
              <Rating
                ratingCount={5}
                startingValue={item.rate}
                imageSize={15}
                readonly
                fractions={2}
              />
              <Text style={styles.customerDateRate}>
                {moment().isAfter(moment(item.created_at).add(10, 'days').toDate())
                  ? moment(item.created_at).format('L')
                  : moment(item.created_at).local(indonesianLocale).startOf('day').fromNow()}
              </Text>
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
};

export default memo(SellerInfo);

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
    paddingHorizontal: 20,
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
