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
        <Text  style={styles.titulo}>Boleto</Text>
        
        <TextInput style={styles.input}
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

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "rgba(255,255,255,0.85)",
    },
    boleto: {
    
    flexDirection: "row",
    height: 60,
    width: "65%",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 30,
    paddingHorizontal: 25,
    marginVertical: 20,
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
    borderWidth: 1,
    borderColor: "#e0e0e0",
},
    img: {
        width: 180,
        height: 180,
        borderRadius: 25,
        marginVertical: 15,
        borderWidth: 3,
        borderColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 6,
    },
    modal: {
        backgroundColor: "rgba(40, 48, 20, 0.21)",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        backgroundColor: "#fff",
        borderRadius: 18,
        paddingHorizontal: 20,
        paddingVertical: 12,
        fontSize: 20,
        width: "80%",
        marginVertical: 12,
        borderWidth: 1,
        borderColor: "#b2bec3",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 2,
        color: "#222",
    },
    titulo: {
        color: "#222f3e",
        fontSize: 42,
        fontWeight: "bold",
        marginBottom: 18,
        textShadowColor: "#dfe6e9",
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 3,
    },
    totalText: {
        fontSize: 22,
        color: "#222f3e",
        fontWeight: "bold",
        marginBottom: 10,
    }
})