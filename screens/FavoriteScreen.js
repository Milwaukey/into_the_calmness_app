import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useContext } from 'react';
import { PinContext } from '../store/pins-context.js';


import FavoriteItem from "../components/FavoriteItem.js";

export default function HomeScreen(){

    const { pins, favoritePins, removeFavoritePin } = useContext(PinContext);


    return (
        <View style={styles.container}>
            <Text style={styles.textHeading}>Your Favorites</Text>

            <ScrollView>
                {pins.map((item) => {

                    if(favoritePins.includes(item.id)){
                        return <FavoriteItem key={item.id} pinObj={item} favoritePins={favoritePins} removeFavoritePin={removeFavoritePin}/>
                    }
                })}
            </ScrollView> 

        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: 80,
        backgroundColor: 'whtie',
        paddingRight: 25,
        paddingLeft: 25
    },
    textHeading: {
        fontSize: 36,
        fontWeight: 700,
        textAlign: 'center'
    }

}) 