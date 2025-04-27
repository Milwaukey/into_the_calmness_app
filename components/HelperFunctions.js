import * as Location from 'expo-location';


export default function Haversine(lat1, lon1, lat2, lon2) {
    const toRad = (deg) => (deg * Math.PI) / 180;
  
    lat1 = toRad(lat1);
    lon1 = toRad(lon1);
    lat2 = toRad(lat2);
    lon2 = toRad(lon2);
  
    const R = 6371000; // Jordens radius i meter
    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;
  
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    return Math.round(R * c); // afstand i meter
  }


  export async function handleGetLocation(){

    // Checking the status for permissions on getting geo location, and handling the granted and not granted situation. 
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Could not get your location!', 'Please check check sittings for location approveal to be able to create new locations.', []);
      return null;
    }

    let location = await Location.getCurrentPositionAsync({});
    return location
}