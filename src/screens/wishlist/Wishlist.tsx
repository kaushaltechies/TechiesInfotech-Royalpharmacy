import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderView from '../home/HeaderView'
import colors from '../../styles/colors'

const Wishlist = () => {
  return (
    <View style={styles.container}>
            <HeaderView/>
      
      <Text>Wishlist</Text>
    </View>
  )
}

export default Wishlist

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.white
  },
})