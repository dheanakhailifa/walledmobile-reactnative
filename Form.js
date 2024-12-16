import { StyleSheet, Text, TextInput, View, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Register from './Register';
import Login from './Login'

export default function Form({ state }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [isSelected, setSelection] = useState(false)
  const [errors, setErrors] = useState({});

  const navigation = useNavigation()

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
    console.log(Object.keys(errors).length)
    console.log(Object.entries(errors).filter(([,value])=> value !==null).length)
    if (Object.entries(errors).filter(([,value])=> value !==null).length === 0) { // Periksa jika tidak ada error
        if (state === 'login') {
            navigation.navigate("Home");
        } else {
            navigation.navigate("Login");
        }
    }
}

  return (
    <SafeAreaView>
    <KeyboardAvoidingView>
        <Image source={require('./assets/walled.png')} style={{width:233, height: 57, alignSelf:'center', marginTop:120}}></Image>
      <View style={{ marginTop: 80, marginBottom:0}}>
        {state === 'register' && (
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={handleNameChange}
          />
        )}
        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={handleEmailChange}
          autoCorrect={false}
          autoCapitalize="none"
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        {/* Password Input */}
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

      {/* checkbox */}
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setSelection(!isSelected)}
        >
        <View style={[styles.checkbox, isSelected && styles.checkedCheckbox]} />
        <Text style={styles.label}>I agree to the terms and conditions</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {redirectScreen()} }
        style={styles.button}
      >
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
    fontSize:10
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:24,
    marginBottom:0,
    marginTop:50
  },
  checkbox: {
    height: 24,
    width: 24,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 8,
  },
  checkedCheckbox: {
    backgroundColor: '#4CAF50',
  },
});
