import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HeaderView from '../home/HeaderView';
import colors from '../../styles/colors';

const Cart = () => {
  return (
    <View style={styles.container}>
      <HeaderView />
       <Text>Cart</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
