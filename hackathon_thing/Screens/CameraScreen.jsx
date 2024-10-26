import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../styles';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import React, { useRef, useState } from 'react';
import * as MediaLibrary from 'expo-media-library';

const Stack = createNativeStackNavigator();

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState(null);
  const [albums, setAlbums] = useState(null);
  const [permissionResponse, requestMediaLibraryPermission] = MediaLibrary.usePermissions();
  const AlbumName = "Insurance Claim Photos";

  const cameraRef = useRef(null);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  async function getAlbums() {
    if (permissionResponse == null || permissionResponse.status !== 'granted') {
      await requestMediaLibraryPermission();
    }
 
    const fetchedAlbums = await MediaLibrary.getAlbumsAsync({
      includeSmartAlbums: true,
    });
    setAlbums(fetchedAlbums);
  }
  getAlbums()

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const options = { quality: 0.5, base64: true };
        const { uri } = await cameraRef.current.takePictureAsync(options);
        const asset = await MediaLibrary.createAssetAsync(uri);
  
        let album = await MediaLibrary.getAlbumAsync(AlbumName);  // Await here
  
        if (!album) {
          console.log('Album not found, creating album');
          album = await MediaLibrary.createAlbumAsync(AlbumName, asset, false); // Await and pass asset initially
        } else {
          await MediaLibrary.addAssetsToAlbumAsync([asset], album.id, false); // Add to album correctly
        }
  
        console.log('Photo saved successfully!');
      } catch (error) {
        console.error('Error saving photo:', error);
      }
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <CameraView
        style={styles.camera}
        type='back'
        ref={cameraRef}
      />
      <Button title="Take Picture" onPress={takePicture} />
    </View>
  );
}