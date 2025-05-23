import { StyleSheet, TouchableOpacity } from "react-native";
import Svg, { Path } from 'react-native-svg';

export default function BackArrow({ width = 9, height = 18, fill = '#000', onPress }){

    return (
        <TouchableOpacity style={styles.backBtn} onPress={onPress}>
            <Svg width={width} height={height} viewBox="0 0 9 18">
                <Path d="M8.00003 17.67C7.81003 17.67 7.62003 17.6 7.47003 17.45L0.950029 10.93C-0.109971 9.87002 -0.109971 8.13002 0.950029 7.07002L7.47003 0.55002C7.76003 0.26002 8.24003 0.26002 8.53003 0.55002C8.82003 0.84002 8.82003 1.32002 8.53003 1.61002L2.01003 8.13002C1.53003 8.61002 1.53003 9.39002 2.01003 9.87002L8.53003 16.39C8.82003 16.68 8.82003 17.16 8.53003 17.45C8.38003 17.59 8.19003 17.67 8.00003 17.67Z"
                fill={fill}/>
            </Svg>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    backBtn: {
        position: 'absolute',
        top: 80,
        left: 25,
        zIndex: 10
    }
})