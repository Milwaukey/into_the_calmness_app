
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Pressable, TextInput, Alert, ImageBackground, TouchableOpacity, KeyboardAvoidingView} from "react-native";
import * as Location from 'expo-location';

import { useContext } from 'react';
import { PinContext } from '../store/pins-context.js';



import LocationIcon from '../assets/icons/LocationIcon.js'
import DescriptionIcon from '../assets/icons/DescriptionIcon.js'
import TextIcon from '../assets/icons/TextIcon.js'
import CameraIcon from '../assets/icons/CameraIcon.js'
import BackArrow from '../assets/icons/BackArrow.js'



export default function AddLocationScreen( {route, navigation} ){

    // Importing and getting elements (Function and objects)
    const { addNewPin } = useContext(PinContext); 
    const { photo } = route.params || {};

    // Handling states for the application
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [pinLocation, setLocation] = useState('')


    // Handling the side effects for the geolocation, when its not yet recieved. 
    useEffect(() => {
        handleGetLocation();
    }, []);


    async function handleGetLocation(){

        // Checking the status for permissions on getting geo location, and handling the granted and not granted situation. 
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            
            return Alert.alert('Could not get your location!', 'Please check check sittings for location approveal to be able to create new locations.', [
            ]);
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
    }


    function handleAddNewLocation(){
        // Check if fields are empty before creating a new location!
        if(title == ''){
            return Alert.alert('Missing Title', 'Please enter a title before proceeding.', [
              ]);

        }else if(description == ''){
            return Alert.alert('Missing Description', 'Please write a short description to continue.', [
              ]);
        }else if(pinLocation === ''){
            
            // TO:DO Create a test, that ensures a location with geo has been set (And if not, set the locaiton)
            return Alert.alert('Missing Location', 'Please add the location to be able to create a new Location.', [
            ]);
        }

        // TODO: Check if there has been submitted an image to the new Location object



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
        setDescription('')
        setTitle('')

        // If object is created - reload back to the map
        navigation.navigate('MainTabs', {screen: 'Map'})
    }


    return (

        <ImageBackground source={require('../assets/images/cover-image.jpg')} resizeMode="cover" style={styles.backgroundImage}>
            <BackArrow fill={'white'} onPress={()=>navigation.navigate('MainTabs', {screen: 'Map'})}/>
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={0}>


            <View style={styles.container}>
                <Text style={styles.textHeading}>Add New Location</Text>

                {photo == undefined ? 

                <TouchableOpacity style={styles.imageWrapper} onPress={() => navigation.replace("Camera")}>
                    <CameraIcon width={15} height={15} fill={'black'}/>
                    <Text style={styles.imageTextField}>Add Image</Text>
                </TouchableOpacity>

                    :

                <Image style={styles.imageShowWrapper} source={{ uri: photo }} />

                }


                <View style={styles.inputWrapper}>
                    <TextIcon width={15} height={15} fill={'black'}/>
                    <TextInput style={styles.textField} placeholder='Title' value={title} onChangeText={setTitle}/>
                </View>

                <View style={styles.inputWrapper}>
                    <DescriptionIcon width={15} height={15} fill={'black'}/>
                    <TextInput style={styles.textField} placeholder='Description' value={description} onChangeText={setDescription}/>
                </View>

                <Pressable onPress={handleGetLocation}>
                    <View style={styles.inputWrapper}>
                        <LocationIcon width={15} height={15} fill={'black'}/>
                            <Text style={styles.textField}>{pinLocation === '' ? 'Add Location' : `${pinLocation.coords.latitude}, ${pinLocation.coords.longitude}`}</Text>
                    </View>
                </Pressable>
                

                <TouchableOpacity style={styles.submitBtn} onPress={handleAddNewLocation}>
                    <Text style={styles.submitText}>+ Add New Location</Text>
                </TouchableOpacity>


            </View>
            </KeyboardAvoidingView>
            <View style={styles.overlay} />
        </ImageBackground>


    );
}


const styles = StyleSheet.create({

    backgroundImage: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 0,
        backgroundColor: '#282828',
        opacity: 0.7,
      },
    container: {
        height: 650,
        backgroundColor: 'white',
        zIndex: 1,
        padding: 25,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    textHeading: {
        fontSize: 30,
        fontWeight: 700,
        textAlign: 'center'
    },

    imageWrapper:{
        height: 200,
        marginTop: 10,
        backgroundColor: '#F6F6F6',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageTextField: {
        fontSize: 12,
        marginTop: 5,
        letterSpacing: 1
    },
    imageShowWrapper:{
        height: 225,
        marginTop: 10,
        resizeMode: 'cover',
        borderRadius: 15
    },

    inputWrapper: {
        height: 60,
        marginTop: 10,
        backgroundColor: '#F6F6F6',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 25,
        paddingRight: 25,
        flexDirection: 'row',
        borderRadius: 15,
        alignItems: 'center'
    },
    textField: {
        marginLeft: 10,
        fontSize: 12,
        letterSpacing: 1
    },

    submitBtn: {
        marginTop: 15,
        borderRadius: 15,
        backgroundColor: '#282828',
        padding: 20
    },
    submitText: {
        fontWeight: 700,
        color: 'white',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 1
    }

}) 