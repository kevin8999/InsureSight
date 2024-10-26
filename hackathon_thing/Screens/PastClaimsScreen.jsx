import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../styles';

const Stack = createNativeStackNavigator();

export default function PastClaimsScreen() {
  return (
    <View style={styles.container}>
      <Text>Past ClaimsLKJASDFLKJ Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}