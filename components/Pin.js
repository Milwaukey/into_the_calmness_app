
import { StyleSheet, View, Image } from 'react-native';

export default function Pin({pinObj}){

    const image = typeof pinObj.image === 'string' ? { uri : pinObj.image } : pinObj.image;


    return (
    
    <View style={styles.pinContainer}>
        <Image style={styles.pinImage} source={image} />
    </View>


    )
}



const styles = StyleSheet.create({
    pinContainer : {
        width: 60,
        height: 60,
    },
    pinImage : {
        width: '100%',
        height: '100%',
        borderRadius: 50
    }
  });