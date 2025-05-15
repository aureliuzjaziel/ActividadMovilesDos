import { Alert, Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Tarjeta(props: any) {
    const [modalVisible, setModalVisible] = useState(false);
    
    return (
        //console.log(props.personajes.images.main), //para ver el contenido del archivo JSON
        //los componentes funcionales son los cque creamos como tarjeta
        //los prop son las propiedades que le pasamos a los componentes
        <TouchableOpacity style={styles.container} onPress={() => setModalVisible(true)}>
            <View style={styles.contenido}>
                <Image source={{ uri: props.personajes.images.main }} style={styles.img} />
                <View style={styles.contenido}>
                    <Text>{props.personajes.name.first}</Text>
                    <Text>{props.personajes.name.last}</Text>
                </View>
            </View>
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalBg}>
                    <View style={styles.modalContent}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{props.personajes.name.first} {props.personajes.name.last}</Text>
                        <Text>Ocupación: {props.personajes.occupation}</Text>
                        <Button title="Cerrar" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },
    container: {
        backgroundColor: '#68aae8',
        borderRadius: 20,
        margin: 5,
        padding: 10,
    },
    contenido: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    modalBg: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 15,
        alignItems: 'center',
        minWidth: 250,
    },
})