import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function GaleriaScreens({navigation}: any) {
  return (
    <View>
      <Text>GaleriaScreens</Text>
      <Button title='lista local' onPress={()=>navigation.navigate("Local")}/>
      <Button title='lista externa'onPress={()=>navigation.navigate("Externo")}/>
    </View>
  )
}

const styles = StyleSheet.create({})