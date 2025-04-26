
import { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import Camera from "../components/Camera";
import PhotoPreview from "../components/PhotoPreview";

import BackArrow from './../assets/icons/BackArrow'

export default function CameraScreen({navigation}){

    const [photoUri, setPhotoUri] = useState('')


    function onPhotoTaken(uri){
       setPhotoUri(uri)
    }

    function handleReTakePhoto(){
        setPhotoUri('')
    }

    function handleUsePhoto(){
        navigation.navigate('AddLocation', {photo: photoUri})
    }
    

    return (
        <View style={styles.container}>

            <BackArrow fill={'white'} onPress={()=>navigation.navigate('AddLocation')} />

            {photoUri == '' ? <Camera onPhotoTaken={onPhotoTaken} /> : <PhotoPreview handleUsePhoto={handleUsePhoto} handleReTakePhoto={handleReTakePhoto} photoUri={photoUri}/>}

        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#282828',
    }

}) 