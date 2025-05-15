import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function RegistroScreen() {
    
    const [nick, setnick] = useState("") //crear un estado para el nickname, el valor inicial es una cadena vacia
    //useState es un hook que permite crear un estado en un componente funcional
    const [nombre, setnombre] = useState("") //crear un estado para el nombre, el valor inicial es una cadena vacia
    const [edad, setedad] = useState(0) //crear un estado para la edad, el valor inicial es una cadena vacia


    function registrar(){
        Alert.alert("Mensaje", "El usuario " + nick + " ha sido registrado , con una edad de: " + edad,) // desde la logica hacia la vista 
        console.log("El usuario se ah registrado")
    }

  return (
    <View style={styles.container}>
      <Text style={{fontSize:35}}>REGISTRO</Text>
      <TextInput style={styles.input}
      placeholder='Ingresa tu Nickname'
      onChangeText={(text)=> setnick(text)} // front => al back
      value={nick}  // back => al front 
      />
      <TextInput style={styles.input}
      placeholder='Ingresa tu nombre'
      onChangeText={(texto)=> setnombre(texto)} // front => al back
      value={nombre} // back => al front
      />
      <TextInput style={styles.input}
      placeholder='Ingresa tu edad'
      keyboardType='numeric'
      onChangeText={(texto)=> setedad(+texto)} // front => al back el mas + convierte el texto a un numero puede ser cualquier nunero. double flotante etc
      value={edad.toString()} // back => al front el toString convierte el numero a texto
      />
     <Button title= 'Registrar' color={'gren'} onPress={()=> registrar()}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#26a1c9",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    input:{
        backgroundColor:"#ffffff",
        margin: 10,
        fontSize: 25,
        height: 60, //altuta en px
        width: "80%", //porcentaje del ancho de la pantalla
        borderRadius: 10,
        paddingHorizontal:20,
        borderWidth: 1,
        borderColor: "#000000",
      }

    
})