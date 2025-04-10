import { View, Text, StyleSheet, Button } from "react-native";


export default function HomeScreen({ navigation }){

    return (
        <View style={styles.container}>
            <Text>Login screen</Text>
            <Button title="Login to the app" onPress={() => navigation.replace("MainTabs")}/>
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        paddingTop: 60
    }

}) 