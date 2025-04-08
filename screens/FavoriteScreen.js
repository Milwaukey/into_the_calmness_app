import { View, Text, StyleSheet, Button } from "react-native";


export default function HomeScreen(){

    return (
        <View style={styles.container}>
            <Text>Favorite List</Text>
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'grey',
        paddingTop: 60
    }

}) 