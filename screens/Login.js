import { StyleSheet, Text, TextInput, View, Image, ImageBackground, ScrollView, Button, SafeAreaView,TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import Form from './Form'

export default function Login() {

    return (
        <SafeAreaView>
            <Form state='login'/> 
        </SafeAreaView>
    )
}

