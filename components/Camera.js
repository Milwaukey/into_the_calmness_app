import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import * as MediaLibrary from 'expo-media-library';

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
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleTakePhoto}>
            <Text style={styles.text}>Take Photo</Text>
          </TouchableOpacity>
        </View>
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
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
