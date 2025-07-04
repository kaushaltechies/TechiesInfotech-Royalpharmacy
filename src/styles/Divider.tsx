import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Sizes } from './Sizes';

const Divider = () => {
  return <View style={styles.ViewStyle} />;
};

export default Divider;

const styles = StyleSheet.create({
  ViewStyle: {
    // marginTop: Sizes.s5,
    // marginBottom: Sizes.s5,
  },
});
