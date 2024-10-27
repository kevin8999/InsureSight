import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import styles from '../styles';

function AlbumPhotos({ album }) {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const fetchAssets = async () => {
      if (album) {
        const assetsResult = await MediaLibrary.getAssetsAsync({
          album: album.id,
          first: 100, // Adjust the number as needed
          mediaType: 'photo',
        });

        const assetInfos = await Promise.all(
          assetsResult.assets.map(asset => MediaLibrary.getAssetInfoAsync(asset.id))
        );

        setAssets(assetInfos.map(info => info.localUri));
      }
    };

    fetchAssets();
  }, [album]);

  return (
    <View key={album.id} style={styles.container}>
      <Text style = {styles.titleText}>
        {album.title} : {album.assetCount ?? 'no'} entries
      </Text>
      <ScrollView horizontal={true} style={styles.horScrollView}>
        {assets && assets.map((uri, index) => (
          <Image key={index} source={{ uri }} style={styles.image} />
        ))}
      </ScrollView>
    </View>
  );
}

function ChatbotText() {

  //and here's where my AI insurance claim would be.... if i had one
  return (
    <View style={styles.container}>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>
      <Text>goasdfasdfasdfabeldygook</Text>
      <Text>gobeasdfadfasdfaldygook</Text>
      <Text>gobeldygasdfasdfook</Text>
      <Text>gobeadsfasdfldygook</Text>

    </View>
  );
}

export default function CurrentClaimScreen({ route, navigation }) {
  const albumName = route.params.albumName;
  const [album, setAlbum] = useState(null);
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

  useEffect(() => {
    const getAlbum = async () => {
      if (!permissionResponse || permissionResponse.status !== 'granted') {
        const response = await requestPermission();
        if (response.status !== 'granted') {
          return;
        }
      }
      const fetchedAlbum = await MediaLibrary.getAlbumAsync(albumName);
      setAlbum(fetchedAlbum);
    };

    getAlbum();
  }, [albumName, permissionResponse]);

  return (
    <View style={styles.container}>
      {album ? <AlbumPhotos album={album} /> : <Text>Loading Claim Photos...</Text>}
      <ScrollView style={styles.horScrollView}>
        <ChatbotText />
      </ScrollView>
    </View>
  );
}

