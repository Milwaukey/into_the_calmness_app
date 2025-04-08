import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from './components/CustomTabBar';


import HomeScreen from './screens/HomeScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import ProfileScreen from './screens/ProfileScreen.js';
import AddLocationScreen from './screens/AddLocationScreen.js';


import MapIcon from './assets/icons/MapIcon.js'
import StarIcon from './assets/icons/StarIcon.js';
import ProfileIcon from './assets/icons/ProfileIcon.js';
import PlusIcon from './assets/icons/PlusIcon.js'


const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>

        <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarIconComponent: ProfileIcon, headerShown: false,}} />
        <Tab.Screen name="Favorite" component={FavoriteScreen} options={{tabBarIconComponent: StarIcon, headerShown: false,}} />
        <Tab.Screen name="Map" component={HomeScreen} options={{tabBarIconComponent: MapIcon, headerShown: false,}} />
        <Tab.Screen name="New Location" component={AddLocationScreen} options={{tabBarIconComponent: PlusIcon, headerShown: false,}} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}



