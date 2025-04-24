import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { BlurView } from 'expo-blur';

import Logo from "../assets/icons/Logo";

export default function HomeScreen({ navigation }){

    return (

        <ImageBackground source={require('../assets/images/cover-image.jpg')} resizeMode="cover" style={styles.backgroundImage}>

                <View style={styles.container}>
                    <Logo width={148} height={44}/>

                    <View style={styles.headerContainer}>
                        <Text style={styles.headingText}>Relax.</Text>
                        <Text style={styles.headingText}>Unplug.</Text>
                        <Text style={styles.headingText}>Explore.</Text>
                        <Text style={styles.subText}>Find your calm spot today!</Text>
                    </View>

                    <TouchableOpacity onPress={() => navigation.replace("MainTabs")}>
                        <BlurView intensity={10} tint="extraLight" style={styles.signInBtn}>
                            <Text style={styles.signInBtnText}>Open the app</Text>                        
                        </BlurView>
                    </TouchableOpacity>

                </View>

                <View style={styles.overlay} />
        </ImageBackground>

    );
}


const styles = StyleSheet.create({

    backgroundImage: {
        flex: 1,
      },
      overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 0,
        backgroundColor: '#282828',
        opacity: 0.7,
      },
      container: {
        flex: 1,
        zIndex: 1,
        paddingTop: 60,
        paddingRight: 25,
        paddingLeft: 25
      },
      signInBtn: {
        width: '100%',
        zIndex: 1,
        padding: 18,
        borderRadius: 15,
        overflow: 'hidden',
      },
      signInBtnText: {
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 700,
        letterSpacing: 1,
        textAlign: 'center'
      },
      headerContainer: {
        marginTop: 142,
        marginBottom: 92
      },
      headingText: {
        fontSize:36,
        fontWeight: 700,
        color: 'white',
        letterSpacing: -0.41,
        lineHeight: 40
      },
      subText: {
        color: 'white',
        letterSpacing: -0.41,
        lineHeight: 40
      },

}) 