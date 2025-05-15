import { Alert, Button, Image, ImageBackground, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function BoletosScreen() {
    /*
    crear una ventana que calcule la venta de boletos para un concierto 
    si la persona es mayor de 60 anos, se aplica un deswcuento del 50%
    no se admite ventas a menores de edad
    la aplicacion debe permitrit infresar la cantidad de boletos a vender
    el precio del boleto es de $55
    
    */
   //un usestate para guardar la canrtidad de boletos
   const [boleto, setboleto] = useState(0)
   
   const [modal, setmodal] = useState(false) // para mostar o no el modal

   const [edad, setedad] = useState('') // para guardar la edad

   // Precio del boleto
   const precioBoleto = 55;

   //  para calcular el precio total
   const calcularTotal = () => {
    const edadNum = parseInt(edad);

    if (isNaN(edadNum) || edadNum <= 0) {
        Alert.alert('Error', 'por favor, ingrese una edad valida.');
        return;
    }

    if (edadNum < 18) {
        Alert.alert('venta no permitida', 'no se permite vender a menores de edad.');
        return;
    }

    let total = boleto * precioBoleto;

    if (edadNum >= 60) {
        total *= 0.5; // aplicar descuento del 50%
    }

    Alert.alert('Total de Venta', `El total a pagar es: $${total.toFixed(2)}`);
};


  return (
    <ImageBackground source={require("../assets/Images/fondo carrito.jpg")} 
    style={styles.container}>
        <Text style={{color:"black", fontSize:40}}>Boleto</Text>
        
        <TextInput
        placeholder='Ingresar edad' keyboardType='numeric' value={edad} onChangeText={setedad}

        />

        <View style={styles.boleto}>
        <Button title='-' color={'red'} 
        onPress={() => {
            if (boleto > 0) setboleto(boleto - 1);
        }}
    />
            <Text style={{color:'white', fontSize:35}}>{boleto}</Text>
            <Button title='+' color={'green'} onPress={()=>setboleto(boleto+1)}/>
         </View>

        <Button title='Calcular' onPress={calcularTotal}/>
        
        <Modal visible={modal} transparent={true}>
            <View style={styles.modal}>
                <Text>Total de Venta de Boletos</Text>
                <Image source={{uri:"https://c0.klipartz.com/pngpicture/411/273/gratis-png-gatitos-y-gatos-bigotes-gatitos-y-gatos-gatito.png"}}
                style={styles.img}/>
                <Button title='cerrar' onPress={()=>setmodal(false)}
                    />
            </View>

        </Modal>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        
    },
    boleto:{
        backgroundColor:"rgba(40, 48, 20, 0.21)",
        flexDirection:"row",
        height:50,
        width:"50%",
        justifyContent:"space-around",
    },
    img:{
        width:200,
        height:200,
        borderRadius:20,
    },
    modal:{
        backgroundColor:"rgba(40, 48, 20, 0.21)",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
})