import React from 'react';
import { Modal, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ModalComp({ modalVisible, setModalVisible }) {
  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      onRequestClose={() => setModalVisible(false)}
      transparent={true}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.navBar}>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={{ alignItems: 'center' }}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.navBarTitle}>Terms and Conditions</Text>
          </View>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.modalText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem
              Ipsum is simply dummy text of the printing and typesetting industry...
            </Text>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject, // Full screen overlay
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
  },
  navBarTitle: {
    color: 'black',
    marginLeft: 20,
    fontWeight: '700',
    fontSize: 16,
  },
  scrollContainer: {
    padding: 20,
  },
  modalText: {
    fontSize: 14,
    textAlign: 'justify',
  },
});
