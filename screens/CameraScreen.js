import { View, Text, StyleSheet, Button } from "react-native";


export default function CameraScreen({navigation}){

    // Show the camera component

    // If image is taken = Show image and btn "Retake" or "Use Image", "Go Back Arrow"..... ALSO if "use image" == true, send image object to addLocationScreen for use

    // If NO image is taken = show camera with "take image"-btn

    return (
        <View style={styles.container}>
            <Text>Her på denne skærm toggler den mellem kameraet og at vise billede du har taget efterfølgende, så du kan godkende det.</Text>


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