import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  SafeAreaView, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Image 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ModalComp from './Modal';
import { login, register } from '../api/restApi';
import { useAuth } from '../context/Auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Form({ state }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  const [errors, setErrors] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  
  const { login: setLoginState } = useAuth();
  const { register: setRegisterState } = useAuth();

  const navigation = useNavigation();

  const handleSubmitLogin = (email, password) => {
    // if (!email || !password) {
    //   alert ('Validation Error', 'Email and Password are required')
    //   console.log(123)
    //   return 
    // }
    handleLogin()

  }

  const handleSubmitRegister = () => {
    if (!name || !email || !password) {
      alert('Validation Error', 'Name, Email, and Password are required');
      return;
    }
    handleRegister(name, email, password);
};

const handleRegister = async (name, email, password, phoneNumber) => {
  try {
    const token  = await register(name, email, password, phoneNumber);
  //   setRegisterState(token);
   alert('Success', 'Register successful');
    navigation.navigate('Login');
  } catch (error) {
    alert('Error', error);
  }
};

  const handleLogin = async () => {
    const payload = {
      email: email,
      password: password
    }
    console.log(payload)
    try {
      const response = await login(payload); // Ensure the payload matches API expectation
      console.log("Token received:", response.data.token);
      //navigation.navigate('Home');
      // const token = typeof response.data.token === "string" ? response.data.token : JSON.stringify(response.data.token);
      await AsyncStorage.setItem('userToken', response.data.token); // Use await for AsyncStorage
      navigation.navigate('Home');
      //console.log('tokenn', token)
      // setLoginState(token)
      //alert('Success', 'Login successful')
      // navigation.navigate('Home');
    } catch (error) {
      console.log(error)
      alert('Error', error.message)
    }
  }

  // Validation logic
  const handleNameChange = (text) => {
    setName(text);
    setErrors((prevErrors) => ({
      ...prevErrors,
      name: text.length < 3 ? 'Name must be at least 3 characters' : null,
    }));
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text) ? null : 'Invalid email format',
    }));
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: text.length < 7 ? 'Password must be at least 7 characters' : null,
    }));
  };

  // const redirectScreen = () => {
  //   const hasErrors = Object.values(errors).some((error) => error !== null);
  //   if (!hasErrors) {
  //     if (state === 'login') {
  //     } else {
  //       navigation.navigate('Login');
  //     }
  //   }
  // };

  return (
    <SafeAreaView>
      {/* Pass modalVisible and setModalVisible as props */}
      <ModalComp modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <KeyboardAvoidingView>
        <Image source={require('../assets/walled.png')} style={{ width: 233, height: 57, alignSelf: 'center', marginTop: 120 }} />
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
              placeholder="Phone Number"
              onChangeText={setPhoneNumber}
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
        <TouchableOpacity onPress={() => (state === 'login'? handleSubmitLogin() : handleSubmitRegister())} style={styles.button}>
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
