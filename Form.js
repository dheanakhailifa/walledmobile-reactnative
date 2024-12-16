import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ModalComp from './Modal';

export default function Form({ state }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  const [errors, setErrors] = useState({});
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility

  const navigation = useNavigation();

  // Validation logic
  const handleNameChange = (text) => {
    setName(text);
    if (text.length < 3) {
      setErrors((prevErrors) => ({ ...prevErrors, name: 'Name must be at least 3 characters' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: null }));
    }
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email format' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: null }));
    }
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    if (text.length < 7) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Password must be at least 7 characters' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: null }));
    }
  };

  const redirectScreen = () => {
    if (Object.entries(errors).filter(([, value]) => value !== null).length === 0) {
      if (state === 'login') {
        navigation.navigate('Home');
      } else {
        navigation.navigate('Login');
      }
    }
  };

  return (
    <SafeAreaView>
      {/* Pass modalVisible and setModalVisible as props */}
      <ModalComp modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <KeyboardAvoidingView>
        <Image source={require('./assets/walled.png')} style={{ width: 233, height: 57, alignSelf: 'center', marginTop: 120 }} />
        <View style={{ marginTop: 80 }}>
          {state === 'register' && (
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={handleNameChange}
            />
          )}
          {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={handleEmailChange}
            autoCorrect={false}
            autoCapitalize="none"
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={handlePasswordChange}
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
          />
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

          {state === 'register' && (
            <TextInput
              style={styles.input}
              placeholder="Avatar URL"
              onChangeText={setAvatarUrl}
              autoCorrect={false}
              autoCapitalize="none"
            />
          )}
        </View>

        {state === 'register' && (
  <TouchableOpacity
    onPress={() => setIsSelected(!isSelected)}
    style={styles.agreementContainer}
    activeOpacity={0.8}
  >
    <View style={[styles.checkbox, isSelected && styles.checkedCheckbox]} />
    <View style={styles.textContainer}>
      <Text style={styles.agreementText}>
        I have read and agree to the{' '}
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.linkText}>Terms and Conditions</Text>
        </TouchableOpacity>
      </Text>
    </View>
  </TouchableOpacity>
)}




        <TouchableOpacity onPress={redirectScreen} style={styles.button}>
          <Text style={styles.buttonText}>{state === 'login' ? 'Login' : 'Register'}</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 25, marginTop: 5 }}>
        <Text style={{ textAlign: 'left' }}>
          {state === 'login' ? "Don’t have account?" : 'Have an account?'}
        </Text>
        <TouchableOpacity onPress={() => {
          if (state === 'login') {
            navigation.navigate('Register'); // Navigate to Register Page
          } else {
            navigation.navigate('Login'); // Navigate to Login Page
          }
        }}>
          <Text style={{ color: 'teal', marginLeft: 5 }}>
            {state === 'login' ? 'Register Here' : 'Login Here'}
          </Text>
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 339,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#FAFBFD',
    marginTop: 10,
    marginLeft: 22,
    paddingLeft: 20,
  },
  button: {
    width: 339,
    height: 50,
    backgroundColor: 'teal',
    marginLeft: 22,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
  },
  errorText: {
    color: 'red',
    marginLeft: 22,
    marginTop: 5,
    fontSize: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 24,
    marginTop: 50,
  },
  checkbox: {
    width: 16, // Match font size
    height: 16, // Match font size
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 4, // Optional: for rounded checkbox
    marginRight: 8, // Add space between checkbox and text
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 4,
    marginRight: 8, // Space between checkbox and text
  },
  checkedCheckbox: {
    backgroundColor: 'teal',
    borderColor: 'teal',
  },
  textContainer: {
    flexShrink: 1, // Allow text to shrink instead of wrapping
  },
  agreementText: {
    fontSize: 13,
    color: '#000',
    flexShrink: 1, // Text will adjust if space is constrained
  },
  linkText: {
    color: 'teal',
    fontSize: 13,
  },
});
