import { createContext, useState } from "react";
import PINS from '../data/pins.js'


export const PinContext = createContext({
    pins : [],
    addNewPin : (pinObj) => {},
    // removePin : (id) => {}
})

function PinContextProvider({ children }){
    // Temporary storage of title and description, while taking an image

    
    const [locationPins, setPins] = useState(PINS)

    function addNewPin(pinObj){
        console.log(pinObj)
        setPins((prevPins) => [...prevPins, pinObj] )
    }

    // function removePin(){

    // }


    const value = {
        pins: locationPins,
        addNewPin : addNewPin,
        // removePin : removePin
    }


    return <PinContext.Provider value={value}>{children}</PinContext.Provider>
}

export default PinContextProvider;