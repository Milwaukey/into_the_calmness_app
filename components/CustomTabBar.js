import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';



export default function CustomTabBar({ state, descriptors, navigation }){

    return (
        <View style={styles.container}>
            <View style={styles.menuWrapper}>

            {state.routes.map((route, index) => {

                const isFocused = state.index === index; // Checks if the current state index matches the clicked one!
                const { options } = descriptors[route.key]; // Destructuring to access properties in options, like the icon for the menubar

                function onPress() {
                    const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true,});
          
                    if (!isFocused && !event.defaultPrevented) {
                      navigation.navigate(route.name);
                    }
                  };

                  return (
                    <TouchableOpacity key={index} onPress={onPress}>
                        {options.tabBarIconComponent && (
                            <options.tabBarIconComponent width={24} height={24} fill={isFocused ? 'white' : 'gray'}
                            />
                        )}
                    </TouchableOpacity>
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