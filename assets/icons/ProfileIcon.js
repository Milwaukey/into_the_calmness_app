import Svg, { Path } from 'react-native-svg';

export default function ProfileIcon({ width, height, fill = '#F9F9F9' }){

    return (
        <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
        <Path d="M19.5 21C19.5 17.134 16.366 14 12.5 14C8.63401 14 5.5 17.134 5.5 21M12.5 11C10.2909 11 8.5 9.20914 8.5 7C8.5 4.79086 10.2909 3 12.5 3C14.7091 3 16.5 4.79086 16.5 7C16.5 9.20914 14.7091 11 12.5 11Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"/>
        </Svg>
    )
}
