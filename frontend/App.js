import { createContext, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './styles';
import CameraScreen from './Screens/CameraScreen';
import CurrentClaimScreen from './Screens/CurrentClaimScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import PastClaimsScreen from './Screens/CurrentClaimScreen';

const Tab = createBottomTabNavigator();
const AlbumName = 'Insurance Claim Photos';

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='CameraScreen'
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'CameraScreen') {
              iconName = focused ? 'camera' : 'camera-outline';
            } else if (route.name === 'CurrentClaim') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            } else if (route.name === 'PastClaims') {
              iconName = focused ? 'list-circle' : 'list-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color}/>;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="CameraScreen" component={CameraScreen} initialParams={{albumName : AlbumName}} options={{title : "Camera Screen"}}/>
        <Tab.Screen name="CurrentClaim" component={CurrentClaimScreen} initialParams={{albumName : AlbumName}}  options={{title : "Current Claim"}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}