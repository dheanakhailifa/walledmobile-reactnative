import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button } from 'react-native';
import React, { useState } from 'react';
import HomePage from './screens/HomePage';
import Login from './Login';
import Register from './Register';
import TopUp from './TopUp';
import Transfer from './Transfer';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

// Call the createStackNavigator function
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            }else if (route.name === "Topup"){
                iconName = focused ? "home" : "home-outline";
            }
            return <Ionicons name={iconName} size={size} color={'teal'} />;
          },
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="TopUp" component={TopUp} options={{ headerShown: false }}/>
        <Tab.Screen name="Home" component={HomePage} options={{ headerShown: false }}/>
        <Tab.Screen name="Transfer" component={Transfer} options={{ headerShown: false }}/>
      </Tab.Navigator>
    );
  }
``  
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen 
        name="Home"
        component={TabNavigator}
        options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
