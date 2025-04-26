

import { View, Text, StyleSheet, ImageBackground, Pressable } from "react-native";
import { BlurView } from 'expo-blur';
import { useContext } from 'react';
import { PinContext } from '../store/pins-context.js';

import StarIcon from './../assets/icons/StarIcon'
import BackArrow from './../assets/icons/BackArrow'
import GeoLocationCalc from "../components/GeoLocationCalc.js";


export default function DetailViewPinScreen({route, navigation}){
    
    const { favoritePins, addFavoritePin, removeFavoritePin } = useContext(PinContext);
    const { pinObj } = route.params;

    // Check if location id is in the favorite list regarding the starIcon filled / no fill
    const isFavorited = favoritePins.includes(pinObj.id);
 
    // Changing the favorite / defavorite location
    function handleFavoriteLocation(){
        if(isFavorited){
            removeFavoritePin(pinObj.id);
        }else{
            addFavoritePin(pinObj.id);
        }
    }
    
    
    return (
        <ImageBackground source={typeof pinObj.image === 'string' ? {uri : pinObj.image} : pinObj.image} resizeMode="cover" style={styles.backgroundImage}>

            <BackArrow onPress={()=>navigation.navigate('MainTabs', {screen: 'Map'})}/>

            <BlurView intensity={50} tint="extraLight" style={styles.infoBox}>
               
               <View style={styles.headingBox}>
                    <Text style={styles.titel}>{pinObj.title}</Text>
                    <Pressable onPress={handleFavoriteLocation}>
                        <StarIcon width={24} height={24} fill={'#000'} isFavorited={isFavorited} />
                    </Pressable>
               </View>

                <GeoLocationCalc pinLocation={pinObj.coordinate}/>

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
    description: {
        lineHeight: 20,
        fontSize: 12
    }

}) 