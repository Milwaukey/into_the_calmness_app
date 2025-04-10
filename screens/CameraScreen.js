import { View, Text, StyleSheet, Button } from "react-native";


export default function CameraScreen({navigation}){

    return (
        <View style={styles.container}>
            <Text>Camera Screen</Text>


            <Button title="Cancel" onPress={()=>navigation.navigate('MainTabs', {screen: 'AddLocation'})} />
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