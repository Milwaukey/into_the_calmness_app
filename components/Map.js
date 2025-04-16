import { useContext } from 'react';
import { PinContext } from '../store/pins-context.js';

import { StyleSheet, View, Pressable} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import Pin from './Pin.js';


export default function Map({navigation} ){

  const { pins } = useContext(PinContext);

  function testTouch(){ // TEST FUNCTION - DELET LATER
    console.log('You hit a pin')
  }

    const CAPITAL_REGION = {
        latitude: 55.71759172985036, 
        longitude: 12.375472260329905,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02
      }


      return (
        <View style={styles.container}>
          <MapView style={styles.map} initialRegion={CAPITAL_REGION}>


          {pins.map((item) => (
            <Marker key={item.id} coordinate={item.coordinate}>
                <Pressable onPress={() => navigation.navigate("DetailView", {pinObj: item})}>
                  <Pin pinObj={item}/>
                </Pressable>
            </Marker>
          ))}
    
    
          </MapView>
        </View>
      );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });
  
  