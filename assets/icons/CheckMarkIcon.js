

import Svg, { Path } from 'react-native-svg';

export default function CheckMarkIcon({ width, height, fill = '#F9F9F9' }){

    return (

        <Svg width={width} height={height} viewBox="0 0 24 24">
            <Path d="M10.369 18C10.0689 18 9.78374 17.8549 9.57363 17.601L5.32651 12.4681C4.89129 11.9421 5.06478 11.526 5.5 11C5.91372 10.5 6.56488 10.974 7.0001 11.5L10.369 15.5L18.0001 5.99991C18.4353 5.47393 19.2385 5.27695 19.6737 5.80293C20.1089 6.32892 20.1089 6.79107 19.6737 7.31706L11.1644 17.601C10.9543 17.8549 10.6692 18 10.369 18Z" fill={fill}/>
        </Svg>

    )
}




