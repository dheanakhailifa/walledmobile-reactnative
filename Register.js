import { StyleSheet, Text, TextInput, View, Image, ImageBackground, ScrollView, Button, SafeAreaView,TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import FormComponent from './Form'

export default function Register() {

    return (
        <SafeAreaView>
            <FormComponent state='register'/>
        </SafeAreaView>
    )
}
