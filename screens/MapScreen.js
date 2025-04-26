import { View, StyleSheet } from "react-native";


import Map from '../components/Map.js'


export default function MapScreen({navigation}){

    return (
        <View style={styles.container}>
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