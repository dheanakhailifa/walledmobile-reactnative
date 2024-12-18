import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity ,ActivityIndicator, FlatList} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { fetchPosts, fetchTransaction } from '../api/restApi';
import { useState, useEffect } from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";
import {useAuth} from '../context/Auth'


export default function HomePage() {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [user, setUser] = useState({})
  const [transaction, setTransaction] = useState([])

  const{logout} = useAuth()

  const handleFetch = async () => {
    try {
      const response = await fetchPosts()
      console.log(response);
      setUser(response.data)
    }
    catch (error) {
    console.error("Logout Error:", error.message);
    alert("Logout Failed: " + error.message);
     }
  }

  const handleLogout = async () => {
    try {
        await logout();
        console.log("Logout successful");
        navigation.navigate("Login");
    } catch (error) {
        console.error("Logout Error:", error.message);
        alert("Logout Failed: " + error.message);
        }
    };
  const{refresh, setRefresh} = useAuth()

  useEffect (() => {
    const getPosts = async () => {
    try {
      const data = await fetchPosts()
      setPosts(data)
      console.log(posts)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false) 
      }
    }
    const getTransaction = async () => {
      console.log("masukkk")
      try {
        const data = await fetchTransaction()
        setTransaction(data)
        console.log(data,"ini transe")
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false) 
        }
      }
    getPosts()
    getTransaction()
  },[refresh])

  // if(loading) {
  //   return <ActivityIndicator size="large" color="#0000ff" style={styles.loader}/>
  // }

  // if (error){
  //   return (
  //     <View style={styles.errorContainer}>
  //       <Text style={styles.errorText}>{error}</Text>
  //     </View>
  //   )
  // } 
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <View style={{flexDirection: 'row', elevation: 3, paddingHorizontal: 20, display: 'flex', alignItems: 'center', height: 80, width: '100%', backgroundColor:'#FFF'}}>
        <Image source={require('../assets/fotoprofil.png')} style={{width: 46, height: 46, borderRadius:100, borderWidth:3, borderColor:'teal'}}></Image>
        <View style={{ marginLeft: 20}}>
          <Text style={{color: 'black', fontWeight: 700}}>{posts.full_name}</Text>
          <Text >Personal Account</Text>
        </View>
        <View style={{flex: 1}}>

        </View>
        <Image source={require('../assets/Vector.png')} style={{width:35, height: 35}}></Image>
        <TouchableOpacity onPress={() => handleLogout()} >
      <Ionicons name='log-out-outline' size={40} style={{marginLeft:10, marginRight:0}}/>
        </TouchableOpacity>
      </View>
    </View>
    <View style={{flexDirection: 'row', width : 381, height:68, marginTop:60,display: 'flex'}}>
    <View style={{width:250, marginLeft:20}}>
      <Text style={{fontWeight:700, fontSize:20}}>Good Morning, {posts.full_name}</Text>
      <Text style={{fontWeight:400, fontSize:14, marginTop:6}}>Check all your incoming and outgoing transactions here</Text>
    </View>
    <Image source={require('../assets/Group.png')} style={{width:81, height: 77, marginRight:9}}></Image>
    </View>
    <View style={{width:337, height:43, marginTop:30, backgroundColor: 'teal',borderRadius:30,display:'flex', marginLeft:20, flexDirection: 'row', elevation:2, justifyContent:'space-between', alignItems:'center', paddingHorizontal:20, marginBottom:5}}>
      <Text style={{fontSize:15, marginLeft:1, color:'#FFF'}}>Account No.</Text>
      <Text style={{fontSize:15, marginRight: 1,color:'#FFF'}}>{posts.account_no}</Text>
    </View>
    <View style={{margin:20,marginBottom:18,marginTop:2,width:337, height:120, marginTop:15,borderRadius:20,display:'flex', flexDirection: 'row', elevation:2, justifyContent:'space-between', alignItems:'center', paddingHorizontal:30, backgroundColor:'#FFF'}}>
    <View>
      <Text style={{fontSize:14}}>Balance</Text>
      <Text style={{fontSize:24}}>Rp {posts.balance} <Feather name="eye" size={20} color="grey" /> </Text>
    </View>
    <View>
    <TouchableOpacity style={{width:39, height:39, backgroundColor:'teal', borderRadius:8, padding:10, marginBottom:5}} onPress={() => navigation.navigate('TopUp')}><AntDesign name="plus" size={20} color="white" marginBottom={0} marginTop={0}/></TouchableOpacity>
    <TouchableOpacity style={{width:39, height:39, backgroundColor:'teal', borderRadius:8}} onPress={() => navigation.navigate('Transfer')}><Feather name="send" size={20} color="white" margin={9}/></TouchableOpacity>
    </View>
    </View>
    <View style={styles.containertransaction}>
      <Text style={styles.header}>Transaction History</Text>

      <ScrollView>
      {transaction.map((transactionItem) => (
          <View key={transactionItem.id}>
          
      <View style={styles.transactionItem}>
      <Image source={require('../assets/robclinton.jpeg')} style={{width: 44, height: 44, borderRadius:100}}></Image>
        <View style={styles.details}>
          <Text style={styles.name}>{transactionItem.description}</Text>
          <Text style={styles.type}>{transactionItem.type == 'c' ? 'Top Up' : 'Transfer'}</Text>
          <Text style={styles.date}>{transactionItem.created_at}</Text>
        </View>
        <Text style={[styles.amount, { color: transactionItem.type === 'c' ? 'green' : 'red' }]}>{transactionItem.type === 'c' ? '+' : '-'}{transactionItem.amount}</Text>
      </View>
          </View>
        ))}
      
      </ScrollView>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:80,
    backgroundColor: '#FAFBFD',
    width : 381,
    height:68
  },
  containertransaction: {
    padding : 16,
    backgroundColor: '#fff',
    borderRadius: 14,
    elevation: 3,
    width:337,
    height:280,
    marginTop:2,
    marginLeft:22,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e0e0e0', // Grey placeholder
    marginRight: 10,
  },
  details: {
    flex: 1,
    marginLeft:6
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
  },
  type: {
    fontSize: 12,
    color: '#757575',
  },
  date: {
    fontSize: 10,
    color: '#9e9e9e',
  },
  amount: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});