import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';



export default function CustomTabBar({ state, descriptors, navigation }){

    return (
        <View style={styles.container}>
            <View style={styles.menuWrapper}>

            {state.routes.map((route, index) => {

                const isFocused = state.index === index; // Checks if the current state index matches the clicked one!
                const { options } = descriptors[route.key]; // Destructuring to access properties in options, like the icon for the menubar

                // onPress function is directly from the react Navigation documentation
                function onPress() {
                    const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true,});
          
                    if (!isFocused && !event.defaultPrevented) { // !event.defaultPrevents makes it possible for me to overider AddLocation, so it will show Stack Navigation instead of staying in tabs stack
                      navigation.navigate(route.name); // Navigates to the belonging route of the navigation in tabs.
                    }
                  };

                  return (
                    <Pressable key={index} onPress={onPress}>
                        {/* Grabbing each icon parsed though props, by tabbing into options.tabBarIconComponent, which contains my Svg Icon */}
                        <options.tabBarIconComponent width={24} height={24} fill={isFocused ? 'white' : 'gray'}/>
                    </Pressable>
                  );
            })}

            </View> 
        </View>  
    )
}



const styles = StyleSheet.create({

    container: {
        position: 'absolute',
        bottom: 35,
        left: 0,
        right: 0,
        alignItems: 'center',

    },
    menuWrapper: {
        backgroundColor: 'black',
        width: 325,
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 50
    }

})