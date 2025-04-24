

import { View, Text, StyleSheet, Button, ImageBackground, TouchableOpacity } from "react-native";
import { BlurView } from 'expo-blur';
import { useContext } from 'react';
import { PinContext } from '../store/pins-context.js';



import StarIcon from './../assets/icons/StarIcon'
import LocationIcon from './../assets/icons/LocationIcon'






export default function DetailViewPinScreen({route, navigation}){
    
    const { favoritePins } = useContext(PinContext);
    const { pinObj } = route.params;

    // TODO: Check if location id is in the favorite list regarding the starIcon filled / no fill

    
    // TODO: Function that calculates the distance from you to the location in meters


    // TODO: Changing the favorite / defavorite location
    function handleFavoriteLocation(){
        console.log('Favorite Location')
    }
    
    
    return (
        <ImageBackground source={pinObj.image} resizeMode="cover" style={styles.backgroundImage}>

            {/* TODO:  Custom Back BTN */}
            <Button title="Go Back" onPress={()=>navigation.navigate('MainTabs', {screen: 'Map'})} /> 

            <BlurView intensity={50} tint="extraLight" style={styles.infoBox}>
               
               <View style={styles.headingBox}>
                    <Text style={styles.titel}>{pinObj.title}</Text>
                    <TouchableOpacity onPress={handleFavoriteLocation}>
                        <StarIcon width={24} height={24} fill={'black'} />
                    </TouchableOpacity>
               </View>
            
                <View style={styles.locationBox}>
                    <LocationIcon width={12} height={12} fill={'black'} />
                    <Text style={styles.location}>TODO: Calc distance from you</Text>
                </View>

                <Text style={styles.description}>{pinObj.description}</Text>

            </BlurView>
            
        </ImageBackground>
    );
}


const styles = StyleSheet.create({

    backgroundImage: {
        flex: 1,
        padding: 25,
        justifyContent: 'flex-end'
      },
    infoBox: {
        width: '100%',
        zIndex: 1,
        padding: 25,
        borderRadius: 15,
        overflow: 'hidden',
        marginBottom: 30
    },
    headingBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    titel: {
        letterSpacing: 1,
        fontWeight: 700,
        textTransform: 'uppercase',
        fontSize: 16
    },
    locationBox: {
        flexDirection: 'row',
        marginBottom: 5
    },
    location: {
        fontSize: 10,
        letterSpacing: 0.5,
        marginLeft: 5
    },
    description: {
        lineHeight: 20,
        fontSize: 12
    }

}) 