import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, Modal, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function ListaExternaScreen() {
  const [data, setdata] = useState([])
  
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState<any>(null)

  async function cargar() {
    const resp = await fetch('https://jritsqmet.github.io/web-api/videojuegos.json');
    const json = await resp.json();
    setdata(json.videojuegos);
  }

  useEffect(() => {
    cargar()
  }, [])

  function mostrarModal(item: any) {
    setSelectedItem(item)
    setModalVisible(true)
  }

  function cerrarModal() {
    setModalVisible(false)
    
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', margin: 10 }}>Lista de Videojuegos</Text>
      <FlatList
        data={data}
      
        renderItem={({ item }: any) =>
          <TouchableOpacity style={styles.container} onPress={() => mostrarModal(item)}>
            <View style={styles.contenido}>
              <Image source={{ uri: item.imagen }} style={styles.img} />
              <View style={styles.info}>
                <Text style={{ fontWeight: 'bold' }}>{item.titulo}</Text>
                <Text>{item.genero}</Text>
              </View>
            </View>
          </TouchableOpacity>
        }
      />

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalBg}>
          <View style={styles.modalContent}>
            {selectedItem ? (
    <>
      <Image source={{ uri: selectedItem.imagen }} style={styles.img} />
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{selectedItem.titulo}</Text>
      <Text>Género: {selectedItem.genero}</Text>
      <Text>Año: {selectedItem.anio}</Text>
      <Button title="Cerrar" onPress={cerrarModal} />
    </>
  ) : null}
            
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  img: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    borderRadius: 10,
    marginRight: 10,
  },
  container: {
    backgroundColor: '#68aae8',
    borderRadius: 20,
    margin: 8,
    padding: 10,
  },
  contenido: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    flex: 1,
    justifyContent: 'center',
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