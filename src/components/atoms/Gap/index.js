import React from 'react';
import { StyleSheet, View } from 'react-native';

const Gap = ({ height, width, style }) => (
  <View style={[styles.container(height, width), { ...style }]} />
);

export default Gap;

const styles = StyleSheet.create({
  container: (height, width) => ({
    height,
    width,
  }),
});
