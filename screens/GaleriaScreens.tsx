import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function GaleriaScreens({navigation}: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>GaleriaScreens</Text>
      <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("Local")}>
        <Text style={styles.textoBoton}>Lista Local</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("Externo")}>
        <Text style={styles.textoBoton}>Lista Externa</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0'
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  boton: {
    backgroundColor: '#4682B4',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 10,
    width: 200,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
})