import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

export default function TopUp() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
            <View style={{flexDirection: 'row', elevation: 3, paddingHorizontal: 20, display: 'flex', alignItems: 'center', height: 80, width: '100%', backgroundColor:'#FFF', marginTop:375}}>
        <View style={{ marginLeft: 20}}>
          <Text style={{color: 'black', fontWeight: 700, fontSize:20}}>Top Up</Text>
        </View>
      </View>
      {/* Amount Section */}
      <View style={{width:370, height:148, marginTop:30, marginBottom:0}}>
        <Text style={styles.label}>Amount</Text>
        <View style={styles.inputWrapper}>
          <Text style={styles.currency}>IDR</Text>
          <TextInput
            style={styles.input}
            value="100.000" // Hardcoded value
            editable={false} // Input is non-editable
          />
        </View>
      </View>

      {/* Payment Method Dropdown */}
      <View style={{width:370, height:51, marginTop:10}}>
        <Text style={styles.label}>Payment Method</Text>
        <View style={styles.dropdown}>
          <Text style={styles.dropdownText}>BYOND Pay</Text>
          <Text style={styles.dropdownArrow}>▼</Text>
        </View>
      </View>

      {/* Notes Section
      <View style={{width:370, heigth:600, marginTop:20}}>
        <Text style={{color:'black', fontSize:16}}>Notes</Text>
        <Text
          style={styles.notesInput}
          placeholder="Enter Notes Here"
          value="Sample Notes" 
        />
      </View> */}

      {/* Top Up Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Top Up</Text>
      </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

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
    section: {
        marginBottom: 20, // Adds spacing between sections
      },
      label: {
        fontSize: 14,
        color: '#757575',
        marginBottom: 8, // Adds spacing below the label
      },
      inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 8,
      },
      currency: {
        fontSize: 18,
        marginRight: 10,
        color: '#333',
      },
      input: {
        flex: 1,
        fontSize: 18,
        color: '#333',
      },
      dropdown: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 12,
        backgroundColor: '#fff',
      },
      notesInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 12,
        fontSize: 16,
        color: '#333',
      },
      button: {
        backgroundColor: '#008C8C',
        paddingVertical: 14,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 80,
        width:355,
        height:52,
        borderRadius:5
      }
})