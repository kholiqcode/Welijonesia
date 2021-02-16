import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PRIMARY, SECONDARY } from '../../../styles';

const Counter = () => (
  <>
    <View style={styles.container}>
      <TouchableOpacity style={styles.counterBtn}>
        <Text>-</Text>
      </TouchableOpacity>
      <Text style={styles.textCounter}>0</Text>
      <TouchableOpacity style={styles.counterBtn}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  </>
);

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 20,
  },
  counterBtn: {
    backgroundColor: PRIMARY,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCounter: {
    fontSize: 12,
    flex: 2,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 1,
    borderColor: SECONDARY,
  },
});
