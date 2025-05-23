import Svg, { Path } from 'react-native-svg';

export default function StarIcon({ width, height, fill = '#F9F9F9', isFavorited = false}){

    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" key={isFavorited ? 'favorited' : 'not-favorited'}>
        <Path d="M2.33496 10.3368C2.02171 10.0471 2.19187 9.52338 2.61557 9.47315L8.61914 8.76134C8.79182 8.74087 8.94181 8.63207 9.01465 8.47417L11.5469 2.9843C11.7256 2.59687 12.2764 2.59682 12.4551 2.98425L14.9873 8.47425C15.0601 8.63215 15.2092 8.74088 15.3818 8.76135L21.3857 9.47315C21.8094 9.52338 21.9795 10.0471 21.6662 10.3368L17.2279 14.4415C17.1002 14.5596 17.0433 14.7356 17.0771 14.9061L18.2551 20.8359C18.3383 21.2544 17.8929 21.578 17.5206 21.3696L12.2453 18.4167C12.0935 18.3318 11.9087 18.3317 11.757 18.4166L6.48109 21.3697C6.10878 21.5781 5.66294 21.2545 5.74609 20.836L6.92437 14.9061C6.95826 14.7355 6.90134 14.5596 6.77367 14.4416L2.33496 10.3368Z"
        
        fill={isFavorited ? fill : 'none'}
        
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"/>
        </Svg>
    )
}
