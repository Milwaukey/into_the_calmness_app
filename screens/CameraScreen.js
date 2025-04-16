
import { useState } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";

import Camera from "../components/Camera";
import PhotoPreview from "../components/PhotoPreview";

export default function CameraScreen({navigation}){

    const [photoUri, setPhotoUri] = useState('')


    function onPhotoTaken(uri){
       setPhotoUri(uri)
    }

    function handleReTakePhoto(){
        setPhotoUri('')
    }

    function handleUsePhoto(){
        navigation.navigate('MainTabs', {screen: 'AddLocation', params: {photo: photoUri} })
    }
    

    return (
        <View style={styles.container}>

            {photoUri == '' ? <Camera onPhotoTaken={onPhotoTaken} /> : <PhotoPreview handleUsePhoto={handleUsePhoto} handleReTakePhoto={handleReTakePhoto} photoUri={photoUri}/>}


            {/* <Button title="Cancel" onPress={()=>navigation.navigate('MainTabs', {screen: 'AddLocation'})} /> */}
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'lightblue',
    }

}) 