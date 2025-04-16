
import { useState } from "react";
import { View, Text, StyleSheet, Button, Image, Pressable, TextInput, Alert } from "react-native";

import { useContext } from 'react';
import { PinContext } from '../store/pins-context.js';


export default function AddLocationScreen( {route, navigation} ){

    const { addPin } = useContext(PinContext); // Skal være den function jeg skal bruge for at oprette!

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')


    const { photo } = route.params || {};

    function handleGetLocation(){
        // Geofencing the location

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

        const id = `${Date.now()}-${Math.random().toString(36)}`;

        // Making the location object
        const newLocationObj = 
        {
            id: id,
            coordinate: {
                latitude: 55.71741262404851,
                longitude: 12.380605952531171
            },
            image: photo,
            title: title,
            description: description
        }

        // Parsing the new Location object to context Pins with addPn function in context
        addPin(newLocationObj)
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