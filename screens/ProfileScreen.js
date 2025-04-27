import { View, Text, StyleSheet, Image, TextInput } from "react-native";


export default function ProfileScreen(){

    return (
        <View style={styles.container}>
            {/* <View style={styles.headContainer}>
                <Image style={styles.profileImage} source={require('../assets/images/cover-image.jpg')}/>
                <Text style={styles.profileName}>Jane Doe</Text>
            </View> */}

            
            <View style={styles.profileImageName}>
                <Image style={styles.profileImage} source={require('../assets/images/cover-image.jpg')}/>
                <Text style={styles.profileName}>Jane Doe</Text>
            </View>


            <View style={styles.profileInformation}>

                <TextInput style={styles.textInput} placeholder='Name' value="Jane Doe"/>
                <TextInput style={styles.textInput} placeholder='Email' value="jane.doe@mail.com"/>
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
    profileImageName:{
        flex: 2,
        justifyContent: 'center',
    },
    profileImage: {
        alignSelf: 'center',
        width: 150,
        height: 150,
        borderRadius: 200,
        marginBottom: 15
    },
    profileName: {
        fontSize: 24,
        fontWeight: 700,
        textAlign: 'center'
    },
    profileInformation: {
        flex: 4,
        padding: 25
    },
    textInput: {
        borderWidth: 0.2,
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20

    }

}) 