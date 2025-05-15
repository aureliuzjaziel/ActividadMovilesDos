import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40}}>Welcome</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#2feb28",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }

})