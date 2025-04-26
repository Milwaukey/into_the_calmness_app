import { View, Text, StyleSheet, Button } from "react-native";


export default function HomeScreen(){

    return (
        <View style={styles.container}>
            <Text style={styles.textHeading}>Your Favorites</Text>

            
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: 80
    },
    textHeading: {
        fontSize: 36,
        fontWeight: 700,
        textAlign: 'center'
    }

}) 