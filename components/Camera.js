import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRef } from 'react';
import { Button, StyleSheet, Text, Pressable, View, Alert } from 'react-native';


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
      Alert.alert('Missing Permission', 'We need your permission to show the camera.', [{text: 'Okay', onPress: handlePermissions}, {text: 'Cancel', style: 'cancel', onPress: handlePermissions}])
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
