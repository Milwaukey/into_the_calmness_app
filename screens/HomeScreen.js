import { View, Text, StyleSheet, Button } from "react-native";


export default function HomeScreen(){

    return (
        <View style={styles.container}>
            <Text>Map Screen</Text>
            {/* <Button title='Take me to profile' onPress={() => navigation.navigate("Profile")}/> */}
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'pink',
        paddingTop: 60
    }

}) 