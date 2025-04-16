import { createContext, useState } from "react";
import PINS from '../data/pins.js'


export const PinContext = createContext({
    pins : [],
    addPin : (pinObj) => {},
    // removePin : (id) => {}
})

function PinContextProvider({ children }){

    const [locationPins, setPins] = useState(PINS)

    function addPin(pinObj){
        console.log(pinObj)
        setPins((prevPins) => [...prevPins, pinObj] )
    }

    // function removePin(){

    // }


    const value = {
        pins: locationPins,
        addPin : addPin,
        // removePin : removePin
    }


    return <PinContext.Provider value={value}>{children}</PinContext.Provider>
}

export default PinContextProvider;