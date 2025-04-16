

import { View, Text, StyleSheet, Button } from "react-native";


export default function DetailViewPinScreen({route, navigation}){

    const { pinObj } = route.params;
    
    

    return (
        <View style={styles.container}>
            <Text>{pinObj.title}</Text>
            <Button title="Go Back" onPress={()=>navigation.navigate('MainTabs', {screen: 'Map'})} />
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'purple',
        paddingTop: 60
    }

}) 