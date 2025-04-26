import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import GeoLocationCalc from './GeoLocationCalc'
import StarIcon from './../assets/icons/StarIcon'

export default function FavoriteItem({pinObj, favoritePins, removeFavoritePin}){

    const isFavorited = favoritePins.includes(pinObj.id);

    function handleFavoriteLocation(){
        if(isFavorited){
            removeFavoritePin(pinObj.id);
        }else{
            addFavoritePin(pinObj.id);
        }
    }

    return (
        <View style={styles.FavoriteItemContainer}>
           <Image style={styles.image} source={pinObj.image}/>

           <View>
                <Text style={styles.headingTitle}>{pinObj.title}</Text>
                <GeoLocationCalc pinLocation={pinObj.coordinate}/>
           </View>

           <TouchableOpacity style={styles.favoriteIcon} onPress={handleFavoriteLocation}>
                <StarIcon width={24} height={24} fill={'#000'} isFavorited={isFavorited} />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({

    FavoriteItemContainer: {
        width: '100%',
        backgroundColor: '#F6F6F6',
        borderRadius: 15,
        marginTop: 20,
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 20,
        paddingLeft: 20,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
    },

    favoriteIcon: {
        position: 'absolute',
        top: 10,
        right: 15
    },

    image: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 15
    },
    headingTitle: {
        fontSize: 20,
        fontWeight: 700,
        marginBottom: 5
    }

}) 