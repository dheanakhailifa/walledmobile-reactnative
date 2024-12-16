import { StyleSheet, Text, TextInput, View, Image, ImageBackground, ScrollView, Button, SafeAreaView,TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

export default function Login1() {
    const [email, onChangeEmail] = useState('')
    const [password, onChangePassword] = useState('')

    return (
        <SafeAreaView>
            <Image source={require('./assets/walled.png')} style={{width:233, height: 57, alignSelf:'center', marginTop:150}}></Image>
            <TextInput
            placeholder='Email'
            style={{width: 339, height:60, borderRadius:10, backgroundColor:'#FAFBFD', marginTop:130, marginLeft:22, paddingLeft:20}}
            onChangeText={onChangeEmail}
            />
            <TextInput
            placeholder='Password'
            style={{width: 339, height:60, borderRadius:10, backgroundColor:'#FAFBFD', marginTop:10, marginLeft:22, paddingLeft:20}}
            onChangeText={onChangePassword}
            secureTextEntry
            />
           <TouchableOpacity onPress={() => console.log('Login Pressed')} style={{width:339, height:50, backgroundColor:'teal', marginLeft:22,borderRadius:10, marginTop:100}}>
            <Text style={{fontSize:16, textAlign:'center', color:'#fff', marginTop:10}}>Login</Text>
           </TouchableOpacity>
           <Text style={{marginLeft:24, marginTop:8, fontSize:13, alignItems:'flex-end'}}>Don't have account?<TouchableOpacity onPress={() => console.log('Register Pressed')} style={{marginTop:5}}> <Text style={{color:'teal',fontSize:13}}> Register Here</Text></TouchableOpacity></Text>
        </SafeAreaView>
    )
}

