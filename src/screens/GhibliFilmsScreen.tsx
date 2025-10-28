import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

interface Film {
  id: string;
  title: string;
  description: string;
  release_date: string;
}

const GhibliFilmsScreen: React.FC = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFilms();
  }, []);

  const fetchFilms = async () => {
    try {
      const response = await fetch('https://ghibliapi.vercel.app/films');
      const data: Film[] = await response.json();
      setFilms(data);
    } catch (error) {
      console.error('Error fetching Ghibli films:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading Ghibli Films...</Text>
      </View>
    );
  }

  const renderItem = ({ item }: { item: Film }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description.substring(0, 100)}...</Text>
      <Text style={styles.date}>Release Date: {item.release_date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Studio Ghibli Films</Text>
      <FlatList
        data={films}
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
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    fontSize: 14,
    marginTop: 5,
    color: '#666',
  },
  date: {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'right',
    color: '#999',
  },
});

export default GhibliFilmsScreen;
