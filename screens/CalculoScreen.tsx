import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function CalculoScreen() {
    /*
    verificar si el usuario es mayor de edad, de ser asi calcular el salario anual en base al salario ingresado
    --agregar el decimo tercer (+475)  y cuarto salario (salario completo) sueldo de salario anual
    */

    const [nombre, setnombre] = useState("")
    const [edad, setedad] = useState(0)
    const [salario, setsalario] = useState(0)

    

    

// un hook para corregir el error de que no se puede ingresar texto en los inputs de edad y salario
    useEffect(() => {
        if (Number.isNaN(edad)){
            Alert.alert("Error", "No se acepta texto")
            setedad(0)
        }
        if (Number.isNaN(salario)){
            Alert.alert("Error", "No se acepta texto")
            setsalario(0)
        }
    }, [edad, salario])
   function calcular () {
    if (edad >= 18) {
        const sueldoGeneral = salario * 12;
        const decimoTercero = 475;
        const decimoCuarto = salario; // un sueldo más como promedio anual
        const salarioTotal = sueldoGeneral + decimoTercero + decimoCuarto;

        Alert.alert(
            "Cálculo de Salario",
            `Sueldo general: $${sueldoGeneral.toFixed(2)}\nDécimo tercero: $${decimoTercero.toFixed(2)}\nDécimo cuarto: $${decimoCuarto.toFixed(2)}\nSalario total: $${salarioTotal.toFixed(2)}`
        );
    } else {
        Alert.alert("Error⚠️", "El empleado tiene que ser mayor de edad");
    }
}

  return (
    <View style={styles.container}>
        <Text style={{fontSize:40}}>Cálculo</Text>
        <TextInput
        placeholder='Ingresa nombre'
        placeholderTextColor={"#ad7767"}
        style={styles.input}
        onChangeText={(texto)=>setnombre(texto)}
        value={nombre}/>

        <TextInput
        placeholder="ingresa edad"
        keyboardType='numeric'
        style={styles.input}
        onChangeText={(texto)=>setedad(+texto)}
        value={edad ===0? "":edad.toString()}/>
        <TextInput
        placeholder='Ingresa salario'
        style={styles.input}
        keyboardType='numeric'
        onChangeText={(texto)=>setsalario(+texto)}
        value={salario ===0? "":salario.toString()}/>
        <TouchableOpacity style={styles.btn} onPress={calcular}>
            <Text style={{fontSize:25}}>Verificar</Text>
            <Image source={{uri:"https://images.creativefabrica.com/products/previews/2024/03/18/9TbbjdEiS/2drDJiAjw7sygw5g10SGfaHk04I-mobile.jpg"}}
            style={styles.img}/>

        </TouchableOpacity>

        
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e0f7fa",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        fontSize: 22,
        backgroundColor: "#fff",
        margin: 8,
        width: "85%",
        height: 48,
        borderRadius: 15,
        paddingHorizontal: 18,
        borderWidth: 1,
        borderColor: "#b2dfdb",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    btn: {
        backgroundColor: "#26a69a",
        width: "90%",
        height: 120,
        alignItems: "center",
        borderRadius: 18,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 4,
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginLeft: 18,
        borderWidth: 2,
        borderColor: "#fff",
    }
})