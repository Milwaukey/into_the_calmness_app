import Svg, { Path } from 'react-native-svg';

export default function MapIcon({ width = 24, height = 24, fill = '#F9F9F9' }){

    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
        <Path
          d="M15 6V21M15 6L21 3V18L15 21M15 6L9 3M15 21L9 18M9 18L3 21V6L9 3M9 18V3"
          stroke={fill}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    )
}

