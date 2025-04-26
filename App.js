import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { StatusBar } from "react-native";

import PinContextProvider from './store/pins-context';

import MainTabs from './components/MainTabs';
import HomeScreen from './screens/HomeScreen';
import CameraScreen from './screens/CameraScreen';
import DetailViewPinScreen from './screens/DetailViewPinScreen';
import AddLocationScreen from './screens/AddLocationScreen';


const Stack = createNativeStackNavigator(); 


export default function App() {
  return (
    <PinContextProvider>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={HomeScreen} />
          <Stack.Screen name="Camera" component={CameraScreen} />
          <Stack.Screen name="DetailView" component={DetailViewPinScreen} />
          <Stack.Screen name="AddLocation" component={AddLocationScreen} />
          <Stack.Screen name="MainTabs" component={MainTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </PinContextProvider>
  );
}

