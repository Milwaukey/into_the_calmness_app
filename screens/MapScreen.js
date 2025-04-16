import { View, Text, StyleSheet, Button } from "react-native";


import Map from '../components/Map.js'


export default function MapScreen({navigation}){

    return (
        <View style={styles.container}>
            {/* <Button title="View single pin" onPress={() => navigation.replace("DetailView")} /> */}

            <Map navigation={navigation}/>

        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
    }

}) 