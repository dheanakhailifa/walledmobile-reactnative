import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
export default function Box({children, style}) {
    return (
        <View style={[style.box,style]}>
            <Text style={StyleSheet.text}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        backgroundColor:'blue',
        padding:900,
        width: 500,
        height: 500

    },
    text:{
        fontSize:24,
        color:'while',
        textAlign:'center'
    }
})