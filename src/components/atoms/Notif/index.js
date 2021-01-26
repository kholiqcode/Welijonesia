import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Notif = () => (
  <View style={styles.notifWrapper}>
    <Text style={styles.textNotif} numberOfLines={1}>
      Pesanan dapat dilakukan di jam 13:00 - 21:00 WIB Hari ini.
    </Text>
  </View>
);

export default Notif;

const styles = StyleSheet.create({
  notifWrapper: {
    justifyContent: 'center',
    backgroundColor: '#FFC3AC',
    height: 40,
    alignItems: 'center',
    marginTop: 5,
  },
  textNotif: {
    fontSize: 12,
  },
});
