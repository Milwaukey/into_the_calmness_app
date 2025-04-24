import { createContext, useState } from "react";
import PINS from '../data/pins.js'


export const PinContext = createContext({
    pins : [],
    favoritePins: [],
    addNewPin : (pinObj) => {},
    // removeFavoritePin : (id) => {}
    // addFavoritePin : (id) => {}
})

function PinContextProvider({ children }){

    const [locationPins, setPins] = useState(PINS)
    const [favoritePins, setFavoritePins] = useState(['ID97237732090328', 'ID93478374834', 'ID0293029237343u9824739874'])

    function addNewPin(pinObj){
        setPins((prevPins) => [...prevPins, pinObj] )
    }

    // function addFavoritePin(){

    // }

    // function removeFavoritePin(){

    // }


    const value = {
        pins: locationPins,
        favoritePins: favoritePins,
        addNewPin : addNewPin,
        // removeFavoritePin : removeFavoritePin,
        // addFavoritePin : addFavoritePin
    }


    return <PinContext.Provider value={value}>{children}</PinContext.Provider>
}

export default PinContextProvider;