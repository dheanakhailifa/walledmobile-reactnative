import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button } from 'react-native';
import React from 'react';
import HomePage from './screens/HomePage';
import Login from './screens/Login';
import Register from './screens/Register';
import TopUp from './screens/TopUp';
import Transfer from './screens/Transfer';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AuthProvider, useAuth } from './context/Auth';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // Define icons for each tab
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "TopUp") {
            iconName = focused ? "wallet" : "wallet-outline";
          } else if (route.name === "Transfer") {
            iconName = focused ? "swap-horizontal" : "swap-horizontal-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "teal", // Active text color
        tabBarInactiveTintColor: "gray", // Inactive text color
      })}
    >
      <Tab.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
      <Tab.Screen name="TopUp" component={TopUp} options={{ headerShown: false }} />
      <Tab.Screen name="Transfer" component={Transfer} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function App() {
  const auth = useAuth()
  return (
    <AuthProvider>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>
  );
}
