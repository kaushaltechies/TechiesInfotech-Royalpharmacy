import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderView from '../home/HeaderView'
import colors from '../../styles/colors'

const Profile = () => {
  return (
  <View style={styles.container}>
      <HeaderView />
      <Text>profile</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.white
  }
})