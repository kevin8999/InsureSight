import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../styles';

export default function CurrentClaimScreen() {
  return (
    <View style={styles.container}>
      <Text>Current Claims screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}