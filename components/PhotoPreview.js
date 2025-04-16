
import { StyleSheet, View, Image, Text, Pressable } from 'react-native';

export default function PhotoPreview({photoUri, handleUsePhoto, handleReTakePhoto}){


    return (
    
    <View style={styles.container}>
        <Image style={styles.image} source={{ uri: photoUri }} />


        <View style={styles.photoOptions}>
            <Pressable style={styles.photoBtn} onPress={handleReTakePhoto}>
                <Text style={styles.textStyling}>Retake Photo</Text>
            </Pressable>
            <Pressable style={styles.photoBtn} onPress={handleUsePhoto}>
                <Text style={styles.textStyling}>Use Photo</Text>
            </Pressable>
        </View>

    </View>


    )
}


const styles = StyleSheet.create({
    container : {
        flex: 1
    },
    image : {
        width: '100%',
        height: '100%',
    },
    photoOptions : {
        bottom: 50,
        left: 0,
        right: 0,
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    photoBtn: {
        width: 150,
        backgroundColor: 'black',
        padding: 20
    },
    textStyling : {
        color: 'white',
        textAlign: 'center'
    }
  });