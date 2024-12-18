import React, { createContext, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext(); //untuk membuat konteks yang memungkinkan data tertentu tersedia untuk seluruh komponen yang ada dalam hierarki

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [refresh, setRefresh] = useState(false)

  const login = async (token) => {
    setUser({ token });
    await AsyncStorage.setItem('userToken', token);

  };
  const logout = async () => {
    console.log('logout')
    setUser(null);
    await AsyncStorage.removeItem('userToken');
    console.log('logout')
  };
  return (
    <AuthContext.Provider value={{ user, login, logout, refresh, setRefresh }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);