import { View, Text, StyleSheet, Button } from "react-native";


export default function ProfileScreen(){

    return (
        <View style={styles.container}>
            <Text>Profile Screen</Text>
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        paddingTop: 60
    }

}) 