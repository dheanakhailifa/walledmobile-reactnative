import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { postsTransaction } from '../api/restApi';
import { useAuth } from '../context/Auth';

export default function Transfer() {
  const [amount, setAmount] = useState(''); // State for transfer amount
  const [notes, setNotes] = useState('');   // State for transfer notes
  const [recipient, setRecipient] = useState(''); // State for recipient number
  const balance = 10000000; // Example balance in IDR
  const [type, setType] = useState("d")

  const{refresh,setRefresh} = useAuth()

  const handleTransfer = async () => {
    setRefresh(false)
      const payload = {
        type: type,
        from_to: recipient,
        amount : amount, 
        description : notes
      }
      console.log(payload)
      try {
        const response = await postsTransaction(payload); // Ensure the payload matches API expectation
        alert('Success', response.message)
      } catch (error) {
        console.log(error)
        alert('Error', error.message)
      } finally {
        setRefresh(true)
      }
    }
  
  return (
    <SafeAreaView style={styles.container}>
      {/* Transfer Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Transfer</Text>
      </View>

      {/* Recipient Section */}
      <View style={styles.card}>
        <Text style={styles.label}>To:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter recipient account number"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={recipient}
          onChangeText={(text) => setRecipient(text)}
        />
      </View>

      {/* Amount Section */}
      <View style={styles.card}>
        <Text style={styles.label}>Amount</Text>
        <View style={styles.amountWrapper}>
          <Text style={styles.currency}>IDR</Text>
          <TextInput
            style={styles.amountInput}
            placeholder="0"
            placeholderTextColor="#aaa"
            keyboardType="numeric"
            value={amount}
            onChangeText={(text) => setAmount(text)}
          />
        </View>
        <Text style={styles.balanceText}>Balance: IDR {balance.toLocaleString()}</Text>
      </View>

      {/* Notes Section */}
      <View style={styles.card}>
        <Text style={styles.label}>Notes</Text>
        <TextInput
          style={styles.notesInput}
          placeholder="Enter notes (optional)"
          placeholderTextColor="#aaa"
          value={notes}
          onChangeText={(text) => setNotes(text)}
        />
      </View>

      {/* Transfer Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => (handleTransfer())}
      >
        <Text style={styles.buttonText}>Transfer</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16, // Replaced margin with padding for responsive layout
    paddingTop: 20,
    backgroundColor: '#F4F6F8',
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
    paddingVertical: 10, // Padding added for better responsiveness
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16, // Uniform padding for better alignment
    marginBottom: 20,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#333',
    height: 40,
  },
  amountWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 12,
  },
  currency: {
    fontSize: 16,
    color: '#333',
    marginRight: 8,
  },
  amountInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  balanceText: {
    fontSize: 12,
    color: '#008C8C',
    marginTop: 5,
    alignSelf: 'flex-end',
  },
  notesInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 12,
    fontSize: 16,
    color: '#333',
    height: 80,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#008C8C',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
