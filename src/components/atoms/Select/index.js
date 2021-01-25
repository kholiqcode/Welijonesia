import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Select = () => (
  <View style={{ borderWidth: 1 }}>
    <Picker>
      <Picker.Item label="Laki-Laki" value="l" />
    </Picker>
  </View>
);

export default Select;

const styles = StyleSheet.create({});
