import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import datos from '../assets/data/futurama.json'
import Tarjeta from '../componets/Tarjeta'

export default function ListaLocalScreen() {
  return (
    //console.log(datos), para ver el contenido del archivo JSON
    <View>
      <Text>ListaLocalScreen</Text>
      <FlatList
        data={datos}
        renderItem={({ item }) =>// para recorrer los arreglos y ver los datos
          <Tarjeta personajes = {item}/> //esto se llama componente funcional
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  img: {
    width: 60,
    height: 60,

  }
})