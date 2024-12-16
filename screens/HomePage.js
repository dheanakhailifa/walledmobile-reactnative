import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation} from '@react-navigation/native';
import TopUp from '../TopUp';
import Transfer from '../Transfer'


export default function HomePage() {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <View style={{flexDirection: 'row', elevation: 3, paddingHorizontal: 20, display: 'flex', alignItems: 'center', height: 80, width: '100%', backgroundColor:'#FFF'}}>
        <Image source={require('../assets/fotoprofil.png')} style={{width: 46, height: 46, borderRadius:100, borderWidth:3, borderColor:'teal'}}></Image>
        <View style={{ marginLeft: 20}}>
          <Text style={{color: 'black', fontWeight: 700}}>Chelsea</Text>
          <Text >Personal Account</Text>
        </View>
        <View style={{flex: 1}}>

        </View>
        <Image source={require('../assets/Vector.png')} style={{width:35, height: 35}}></Image>
      </View>
    </View>
    <View style={{flexDirection: 'row', width : 381, height:68, marginTop:60,display: 'flex'}}>
    <View style={{width:250, marginLeft:20}}>
      <Text style={{fontWeight:700, fontSize:20}}>Good Morning, Chelsea</Text>
      <Text style={{fontWeight:400, fontSize:14, marginTop:6}}>Check all your incoming and outgoing transactions here</Text>
    </View>
    <Image source={require('../assets/Group.png')} style={{width:81, height: 77, marginRight:9}}></Image>
    </View>
    <View style={{width:337, height:43, marginTop:30, backgroundColor: 'teal',borderRadius:30,display:'flex', marginLeft:20, flexDirection: 'row', elevation:2, justifyContent:'space-between', alignItems:'center', paddingHorizontal:20, marginBottom:5}}>
      <Text style={{fontSize:15, marginLeft:1, color:'#FFF'}}>Account No.</Text>
      <Text style={{fontSize:15, marginRight: 1,color:'#FFF'}}>100899</Text>
    </View>
    <View style={{margin:20,marginBottom:18,marginTop:2,width:337, height:120, marginTop:15,borderRadius:20,display:'flex', flexDirection: 'row', elevation:2, justifyContent:'space-between', alignItems:'center', paddingHorizontal:30, backgroundColor:'#FFF'}}>
    <View>
      <Text style={{fontSize:14}}>Balance</Text>
      <Text style={{fontSize:24}}>Rp 10.000.000 <Feather name="eye" size={20} color="grey" /> </Text>
    </View>
    <View>
    <TouchableOpacity style={{width:39, height:39, backgroundColor:'teal', borderRadius:8, padding:10, marginBottom:5}} onPress={() => navigation.navigate('TopUp')}><AntDesign name="plus" size={20} color="white" marginBottom={0} marginTop={0}/></TouchableOpacity>
    <TouchableOpacity style={{width:39, height:39, backgroundColor:'teal', borderRadius:8}} onPress={() => navigation.navigate('Transfer')}><Feather name="send" size={20} color="white" margin={9}/></TouchableOpacity>
    </View>
    </View>
    <View style={styles.containertransaction}>
      <Text style={styles.header}>Transaction History</Text>

      <ScrollView>
      {/* Transaction Item 1 */}
      <View style={styles.transactionItem}>
      <Image source={require('../assets/robclinton.jpeg')} style={{width: 44, height: 44, borderRadius:100}}></Image>
        <View style={styles.details}>
          <Text style={styles.name}>Adityo Gizwaanda</Text>
          <Text style={styles.type}>Transfer</Text>
          <Text style={styles.date}>08 December 2024</Text>
        </View>
        <Text style={[styles.amount, { color: 'red' }]}>- 75.000,00</Text>
      </View>

      {/* Transaction Item 2 */}
      <View style={styles.transactionItem}>
      <Image source={require('../assets/robclinton.jpeg')} style={{width: 44, height: 44, borderRadius:100}}></Image>
        <View style={styles.details}>
          <Text style={styles.name}>Adityo Gizwaanda</Text>
          <Text style={styles.type}>Topup</Text>
          <Text style={styles.date}>08 December 2024</Text>
        </View>
        <Text style={[styles.amount, { color: 'green' }]}>+ 75.000,00</Text>
      </View>

      {/* Transaction Item 3 */}
      <View style={styles.transactionItem}>
      <Image source={require('../assets/robclinton.jpeg')} style={{width: 44, height: 44, borderRadius:100}}></Image>
        <View style={styles.details}>
          <Text style={styles.name}>Adityo Gizwaanda</Text>
          <Text style={styles.type}>Transfer</Text>
          <Text style={styles.date}>08 December 2024</Text>
        </View>
        <Text style={[styles.amount, { color: 'red' }]}>- 75.000,00</Text>
      </View>

      <View style={styles.transactionItem}>
      <Image source={require('../assets/robclinton.jpeg')} style={{width: 44, height: 44, borderRadius:100}}></Image>
        <View style={styles.details}>
          <Text style={styles.name}>Adityo Gizwaanda</Text>
          <Text style={styles.type}>Topup</Text>
          <Text style={styles.date}>08 December 2024</Text>
        </View>
        <Text style={[styles.amount, { color: 'green' }]}>+ 75.000,00</Text>
      </View>

      <View style={styles.transactionItem}>
      <Image source={require('../assets/robclinton.jpeg')} style={{width: 44, height: 44, borderRadius:100}}></Image>
        <View style={styles.details}>
          <Text style={styles.name}>Adityo Gizwaanda</Text>
          <Text style={styles.type}>Transfer</Text>
          <Text style={styles.date}>08 December 2024</Text>
        </View>
        <Text style={[styles.amount, { color: 'red' }]}>- 75.000,00</Text>
      </View>
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


//     <View style={styles.container}>
//     <ScrollView style={styles.scrollView}>
//     <Image source={nailong} style={{width:300, height:300}}/>
//       <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel eros mollis, vehicula felis in, viverra diam. Proin sed sapien magna. Quisque vitae felis sit amet sem pulvinar aliquam et ullamcorper nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque risus sem, sagittis id auctor at, ullamcorper vel sapien. Maecenas mollis sem id est scelerisque, sit amet sodales diam lacinia. Nunc molestie ipsum eget commodo vulputate. Morbi sed metus eu magna semper molestie sed ut quam. Nulla facilisi. In ac blandit quam. Praesent pulvinar vitae sem id vestibulum. Fusce eget egestas mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at neque massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique dui leo, eget imperdiet nunc tincidunt non.

// Donec mi diam, bibendum eget tortor a, tincidunt tincidunt lorem. Aliquam viverra iaculis est, id varius ante eleifend vitae. Maecenas nunc eros, rhoncus a eros at, ultrices tempor metus. Vestibulum iaculis sem ex, at molestie nisl luctus ac. Donec vestibulum erat enim, eu interdum ex ultrices in. Etiam sodales erat a erat ullamcorper, accumsan sollicitudin libero fringilla. Curabitur quis auctor justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vestibulum neque sed nisl vehicula, id rutrum erat aliquet. Morbi eu mollis turpis, eu rutrum ligula.

// Sed metus libero, malesuada ac luctus eget, dignissim non metus. Suspendisse ultrices molestie ultricies. Nullam feugiat mauris mattis, tempus orci vitae, auctor lectus. Nulla vulputate risus in eros pellentesque lobortis. Praesent sed nunc hendrerit, luctus velit vel, imperdiet sapien. Aliquam accumsan nisi metus, tincidunt interdum sem tincidunt ac. Duis luctus mauris vitae tortor cursus, vel feugiat nibh imperdiet. Nunc ac magna augue. Nulla quis volutpat urna, id pulvinar arcu. Sed nibh nisl, sagittis at mi nec, rutrum semper sapien. Duis interdum placerat dui, sed tincidunt nulla dictum quis. Nulla ligula nunc, vestibulum vel diam id, molestie egestas tortor. Etiam pharetra dapibus nisl.

// Mauris quis nulla id leo ultrices ullamcorper vel a elit. Pellentesque suscipit faucibus imperdiet. Praesent a nisl et mauris pellentesque elementum ac eu massa. Nam ut suscipit nulla. Vestibulum at molestie neque. Morbi sit amet odio odio. Nulla tortor enim, ullamcorper sit amet sodales posuere, semper at augue.

// Proin scelerisque laoreet libero eu finibus. Praesent est urna, varius id tortor sit amet, condimentum ullamcorper ligula. Donec a feugiat elit. Fusce eget placerat nulla, ac laoreet quam. Vivamus at dui nec quam iaculis rhoncus sed quis odio. Etiam a laoreet erat, sed efficitur nisl. Nullam mauris lorem, vehicula a maximus id, vestibulum ac mauris. Pellentesque tincidunt ante mattis velit pulvinar eleifend. Fusce hendrerit risus a vulputate rutrum. Maecenas quis nisi eget eros molestie pharetra id a orci. Cras id turpis quis elit gravida pellentesque.</Text>
// <Button title='Press' onPress={() => console.log("Button pressed")} color="black"/>
//   <TouchableOpacity onPress={() => console.log("Button pressed")} ><Text >Click</Text></TouchableOpacity>
//   <View style={[styles.box, styles.green]}>
//     <Text>Green Box</Text>
//   </View>
//   <View style={[styles.box, styles.blue]}>
//     <Text>Blue Box</Text>
//   </View>
//   <View style={styles.container}>
//     <Box style={{backgroundColor:'red'}}>Box 1</Box>
//     <Box style={{backgroundColor:'blue'}}>Box 2</Box>
//     <Box style={{backgroundColor:'green'}}>Box 3</Box>
//     <Box style={{backgroundColor:'yellow'}}>Box 4</Box>
//     <Box style={{backgroundColor:'brown'}}>Box 5</Box>
//     <Box style={{backgroundColor:'pink'}}>Box 6</Box>

//   </View>
//     </ScrollView>
//     </View>