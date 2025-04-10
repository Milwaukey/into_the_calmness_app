import { View, Text, StyleSheet, Button } from "react-native";


export default function AddLocationScreen( {navigation} ){

    return (
        <View style={styles.container}>
            <Text>Add new location</Text>


            <Button title="Add Image" onPress={() => navigation.replace("Camera")} />
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
        paddingTop: 60
    }

}) 