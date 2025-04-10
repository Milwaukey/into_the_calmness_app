import { View, Text, StyleSheet, Button } from "react-native";


export default function MapScreen({navigation}){

    return (
        <View style={styles.container}>
            <Text>Map Screen</Text>
            <Button title="View single pin" onPress={() => navigation.replace("DetailView")} />
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'pink',
        paddingTop: 60
    }

}) 