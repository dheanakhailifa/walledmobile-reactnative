import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import { postsTransaction } from '../api/restApi';
import { useAuth } from '../context/Auth';

export default function TopUp() {
  const [amount, setAmount] = useState(''); // State for amount
  const [notes, setNotes] = useState('');  // State for notes
  const [paymentMethod, setPaymentMethod] = useState('BYOND Pay'); // Default payment method
  const [isDropdownVisible, setDropdownVisible] = useState(false); // State for dropdown visibility
  const [type, setType] = useState("c")

  const paymentMethods = ['BYOND Pay', 'Credit Card', 'Bank Transfer'];
  const {refresh, setRefresh} = useAuth() 

  const handleTopUp = async () => {
    setRefresh(false)
    const payload = {
      type: type,
      from_to: paymentMethod,
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
    } finally{
      setRefresh(true)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Top Up</Text>
      </View>

      {/* Amount Section */}
      <View style={styles.card}>
        <Text style={styles.label}>Amount</Text>
        <View style={styles.inputWrapper}>
          <Text style={styles.currency}>IDR</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter amount"
            placeholderTextColor="#aaa"
            keyboardType="numeric"
            value={amount}
            onChangeText={(text) => setAmount(text)}
          />
        </View>
      </View>

      {/* Payment Method Section */}
      <View style={styles.card}>
        <Text style={styles.label}>Payment Method</Text>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setDropdownVisible(!isDropdownVisible)}
        >
          <Text style={styles.dropdownText}>{paymentMethod}</Text>
          <Text style={styles.dropdownArrow}>▼</Text>
        </TouchableOpacity>

        {/* Dropdown List */}
        {isDropdownVisible && (
          <FlatList
            data={paymentMethods}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback
                onPress={() => {
                  setPaymentMethod(item); 
                  setDropdownVisible(false);
                }}
              >
                <View style={styles.dropdownItem}>
                  <Text style={styles.dropdownItemText}>{item}</Text>
                </View>
              </TouchableWithoutFeedback>
            )}
          />
        )}
      </View>

      {/* Notes Section */}
      <View style={styles.card}>
        <Text style={styles.label}>Notes</Text>
        <TextInput
          style={styles.notesInput}
          placeholder="Enter notes"
          placeholderTextColor="#aaa"
          value={notes}
          onChangeText={(text) => setNotes(text)}
        />
      </View>

      {/* Top Up Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {handleTopUp()}}
      >
        <Text style={styles.buttonText}>Top Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16, // Use padding for screen adjustment
    paddingTop: 20,
    backgroundColor: '#FAFBFD',
  },
  header: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    elevation: 3,
    marginBottom: 20,
    borderRadius: 10,
    paddingHorizontal: 16, // Padding for flexible spacing
  },
  headerText: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16, // Uniform padding
    marginBottom: 20,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  currency: {
    fontSize: 16,
    marginRight: 10,
    color: '#333',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 12,
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  dropdownArrow: {
    fontSize: 16,
    color: '#333',
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#333',
  },
  notesInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 12,
    fontSize: 16,
    color: '#333',
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
