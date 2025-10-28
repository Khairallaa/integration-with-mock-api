import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Image, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Song {
  id: string;
  name: string;
  img: string;
  url: string;
}

const OpenwhydSongsScreen: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    try {
      const response = await fetch('https://openwhyd.org/hot/electro?format=json');
      const data = await response.json();
      // The API returns an object with a 'tracks' array
      setSongs(data.tracks || []);
    } catch (error) {
      console.error('Error fetching Openwhyd songs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePress = (url: string) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading Hot Electro Songs...</Text>
      </View>
    );
  }

  const renderItem = ({ item }: { item: Song }) => (
    <TouchableOpacity onPress={() => handlePress(item.url)}>
      <View style={styles.item}>
        <Image source={{ uri: item.img }} style={styles.thumbnail} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hot Electro Songs from Openwhyd</Text>
      <FlatList
        data={songs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    alignItems: 'center',
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default OpenwhydSongsScreen;
