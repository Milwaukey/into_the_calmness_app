
import { View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from 'react';

import Haversine from '../components/HelperFunctions.js'
import { handleGetLocation } from "../components/HelperFunctions.js";

import LocationIcon from './../assets/icons/LocationIcon'

export default function GeoLocationCalc({ pinLocation }){

    const [userLocation, setUserLocation] = useState(null)

    // Handling the side effects for the geolocation, when its not yet recieved.
    useEffect(() => {
        fetchUserLocation();
    }, []);

    // Grabing the location from HelperFunctions, so we can use geoLocation fetching more places in the app
    async function fetchUserLocation(){
        const location = await handleGetLocation()
        if( location ){
            setUserLocation(location)
        }
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