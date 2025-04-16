import { View, Text, StyleSheet, Button } from "react-native";


export default function AddLocationScreen( {navigation} ){

    // Form that contains option to take image, title, description and geofencing from where you are right now when picture is taken. 

    // Step 2, if you try to write something in the inputfield before taking a picture (give an alert)

    // Step 3, When clicking on "Take image", navigate to camera screen. 

    // Step 4, if image is true = show image in field and remove "take image btn".. 

    // If false, show the btn to guide you to the camera component.


    return (
        <View style={styles.container}>
        


            <Text>Title</Text>
            <Text>Description</Text>
            <Text>Location</Text>











            <Text>Visning af billede man tog, hvis man har taget et (hide knap til at tage billede)</Text>
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