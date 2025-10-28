import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Student Information</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>MAHMOUD KHAIRALLA AMIN MORSI</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>NIM:</Text>
        <Text style={styles.value}>20230040348</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
    marginRight: 10,
  },
  value: {
    fontSize: 18,
    color: '#000',
    flexShrink: 1,
  },
});

export default AboutScreen;
