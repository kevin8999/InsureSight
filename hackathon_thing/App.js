
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './styles';
import CameraScreen from './Screens/CameraScreen';
import CurrentClaimScreen from './Screens/CurrentClaimScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import PastClaimsScreen from './Screens/CurrentClaimScreen';

const Tab = createBottomTabNavigator();

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
        <Tab.Screen name="CameraScreen" component={CameraScreen} options={{title : "Camera Screen"}}/>
        <Tab.Screen name="CurrentClaim" component={CurrentClaimScreen} options={{title : "Current Claim"}}/>
        <Tab.Screen name="PastClaims" component={PastClaimsScreen} options={{title : "Past Claims"}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}