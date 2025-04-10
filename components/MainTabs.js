
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/CustomTabBar';


import MapScreen from '../screens/MapScreen.js';
import FavoriteScreen from '../screens/FavoriteScreen';
import ProfileScreen from '../screens/ProfileScreen.js';
import AddLocationScreen from '../screens/AddLocationScreen.js';


import MapIcon from '../assets/icons/MapIcon.js'
import StarIcon from '../assets/icons/StarIcon.js';
import ProfileIcon from '../assets/icons/ProfileIcon.js';
import PlusIcon from '../assets/icons/PlusIcon.js'


const Tab = createBottomTabNavigator();


export default function MainTabs(){
    
    return (
        <Tab.Navigator initialRouteName="Map" tabBar={props => <CustomTabBar {...props} />} >

            <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarIconComponent: ProfileIcon, headerShown: false,}} />
            <Tab.Screen name="Favorite" component={FavoriteScreen} options={{tabBarIconComponent: StarIcon, headerShown: false,}} />
            <Tab.Screen name="Map" component={MapScreen} options={{tabBarIconComponent: MapIcon, headerShown: false,}} />
            <Tab.Screen name="AddLocation" component={AddLocationScreen} options={{tabBarIconComponent: PlusIcon, headerShown: false,}} />

        </Tab.Navigator>
    )
}