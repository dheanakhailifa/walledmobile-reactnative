import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Button, View, SafeAreaView, Pressable} from 'react-native';

export default function  ModalComp() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.centeredView}>
        <Button title="Show Modal" onPress={() => setModalVisible(true)} />
        <Modal 
        onRequestClose={() => setModalVisible(false)} //perintah menutup modal
        visible={modalVisible} // mengatur modal muncul
        presentationStyle='pageSheet' // untuk mengatur tampilan modal (untuk ios aza)
        animationType="slide" // untuk mengatur animasi modal
        transparent={true} // untuk mengatur transparansi modal
        >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>
          <Button title="Close Modal" onPress={() => setModalVisible(false)} />
        </View>
        </Modal>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});