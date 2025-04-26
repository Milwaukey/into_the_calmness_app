
import { View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from 'react';

import Haversine from '../components/HelperFunctions.js'
import * as Location from 'expo-location';

import LocationIcon from './../assets/icons/LocationIcon'

export default function GeoLocationCalc({pinLocation, }){

    const [userLocation, setUserLocation] = useState(null)

    // Get the Users location for calculation
    useEffect(() => {
        handleGetLocation();
    }, []);
    
    
    async function handleGetLocation(){
        // TO:DO (note)
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log('Problems with the geo location') // TO:DO give an alert, if you have not approved geo tracking
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setUserLocation(location)
    }
    
    // Function that calculates the distance from you to the location in meters
    let formatDistanceToLocation = '';

    if(userLocation && userLocation.coords){
        const locationDistanceFromMe = Haversine(userLocation.coords.latitude, userLocation.coords.longitude, pinLocation.latitude, pinLocation.longitude);
        formatDistanceToLocation = locationDistanceFromMe >= 1000 ? `${(locationDistanceFromMe/1000).toFixed(1)}km` : `${locationDistanceFromMe}m`;
    }


    return (
        <View style={styles.locationBox}>
            <LocationIcon width={12} height={12} fill={'#000'} />
            <Text style={styles.location}>{formatDistanceToLocation} from you</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    locationBox: {
        flexDirection: 'row',
        marginBottom: 5
    },
    location: {
        fontSize: 10,
        letterSpacing: 0.5,
        marginLeft: 5
    },
})