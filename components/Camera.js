import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, Pressable, View } from 'react-native';


import CameraIcon from '../assets/icons/CameraIcon'


export default function Camera({onPhotoTaken}) {
  const [permission, requestPermission] = useCameraPermissions();
  const photoRef = useRef(null)


    async function handlePermissions(){
        if(!permission.granted){
            await requestPermission()
        }
    }

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={handlePermissions} title="grant permission" />
      </View>
    );
  }

  async function handleTakePhoto(){
    const photo = await photoRef.current?.takePictureAsync();
    onPhotoTaken(photo.uri)
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} ref={photoRef}>

        <Pressable style={styles.takePhotoBtn} onPress={handleTakePhoto}>
            <CameraIcon width={30} height={30} />
        </Pressable>


      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },

  takePhotoBtn: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'white',
    position: 'absolute',
    bottom: 60,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  }

});
