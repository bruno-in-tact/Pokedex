import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BaseStats = () => {
  return (
    <View style ={styles.BaseStats}>
      <Text>BaseStats</Text>

    </View>
  )
}

export default BaseStats;

const styles = StyleSheet.create({

  BaseStats:{
    width:'100%',
    backgroundColor:'red',
    top: 50,
    height: 200,

  },
})