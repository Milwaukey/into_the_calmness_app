
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Image, Pressable, TextInput, Alert } from "react-native";
import * as Location from 'expo-location';

import { useContext } from 'react';
import { PinContext } from '../store/pins-context.js';


export default function AddLocationScreen( {route, navigation} ){

    const { addNewPin } = useContext(PinContext); // Skal være den function jeg skal bruge for at oprette!

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [pinLocation, setLocation] = useState('')


    const { photo } = route.params || {};

    // TO:DO (note)
    useEffect(() => {
        handleGetLocation();
    }, []);


    async function handleGetLocation(){
        // Geofencing the location

        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.log('Problems with the geo location') // TO:DO give an alert, if you have not approved geo tracking
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
    }


    function handleAddNewLocation(){
        // Check if fields are empty!
        if(title == ''){
            return Alert.alert('Missing Title', 'Please enter a title before proceeding.', [
              ]);

        }else if(description == ''){
            return Alert.alert('Missing Description', 'Please write a short description to continue.', [
              ]);
        }

        // TO:DO Create a test, that ensures a location with geo has been set


        // Creating an unique ID for the pinObject
        const id = `${Date.now()}-${Math.random().toString(36)}`;

        // Making the pinObject
        const newLocationObj = 
        {
            id: id,
            coordinate: {
                latitude: pinLocation.coords.latitude,
                longitude: pinLocation.coords.longitude
            },
            image: photo,
            title: title,
            description: description
        }

        // Parsing the new Location object to context Pins with addPn function in context
        addNewPin(newLocationObj)
        setLocation('')
    }


    return (
        <View style={styles.container}>


            <TextInput placeholder='Title' value={title} onChangeText={setTitle}/>
            <TextInput placeholder='Description' value={description} onChangeText={setDescription}/>

            <Pressable onPress={handleGetLocation}>
                <Text>Add Location</Text>
            </Pressable>

            {photo == undefined ? <Button title="Add Image" onPress={() => navigation.replace("Camera")} /> : <Image style={{width: 150, height: 150}} source={{ uri: photo }}/>}

            <Button title='+ Add new location' onPress={handleAddNewLocation} />
            
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
        paddingTop: 60
    }

}) 