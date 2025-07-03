import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HeaderView from '../home/HeaderView';
import colors from '../../styles/colors';

const Categories = () => {
  return (
    <View style={styles.container}>
      <HeaderView />
      <Text>Categories</Text>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
