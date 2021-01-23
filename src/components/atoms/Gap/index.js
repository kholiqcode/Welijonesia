import React from 'react';
import { StyleSheet, View } from 'react-native';

const Gap = ({ height, width }) => <View style={styles.container(height, width)} />;

export default Gap;

const styles = StyleSheet.create({
  container: (height, width) => ({
    height,
    width,
  }),
});
