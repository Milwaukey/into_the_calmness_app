import Svg, { Path } from 'react-native-svg';

export default function PlusIcon({ width, height, fill = '#F9F9F9' }){

    return (
        <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
            <Path d="M6.5 12H18.5M12.5 18L12.5 6"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round" 
            trokeLinejoin="round"/>
        </Svg>
    )
}
