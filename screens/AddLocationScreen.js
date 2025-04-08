import { View, Text, StyleSheet, Button } from "react-native";


export default function AddLocationScreen(){

    return (
        <View style={styles.container}>
            <Text>Add new location</Text>
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'green',
        paddingTop: 60
    }

}) 