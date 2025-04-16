
import { StyleSheet, View, Image } from 'react-native';

export default function Pin({pinObj}){


    return (
    
    <View style={styles.pinContainer}>
        <Image style={styles.pinImage} source={pinObj.image} />
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