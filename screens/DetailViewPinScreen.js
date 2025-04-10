import { View, Text, StyleSheet, Button } from "react-native";


export default function DetailViewPinScreen({navigation}){

    return (
        <View style={styles.container}>
            <Text>Detail View Pin</Text>
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