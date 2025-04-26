import { View, Text, StyleSheet, Image, Button } from "react-native";


export default function ProfileScreen({navigation}){

    return (
        <View style={styles.container}>
            <View style={styles.headContainer}>
                <Image style={styles.profileImage} source={require('../assets/images/cover-image.jpg')}/>
                <Text style={styles.profileName}>Jane Doe</Text>

                <Button onPress={() => navigation.navigate("AddLocation")} title={'add location'}></Button>

            </View>
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 60
    },
    headContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 15,
        paddingLeft: 15,
        marginTop: 10,
        marginBottom: 10
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 22.5,
    },
    profileName: {
        marginLeft: 10,
        fontWeight: 700
    }

}) 