import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import database from '@react-native-firebase/database';

const TreatmentLibraryScreen = ({ navigation }) => {
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    const fetchTreatments = async () => {
      try {
        const snapshot = await database().ref('treatments').once('value');
        const data = snapshot.val();
        const treatmentsList = data ? Object.values(data) : [];
        setTreatments(treatmentsList);
      } catch (error) {
        console.error('Error fetching treatments:', error);
      }
    };

    fetchTreatments();
  }, []);

  const renderTreatmentItem = ({ item }) => (
    <TouchableOpacity
      style={styles.treatmentItem}
      onPress={() => navigation.navigate('TreatmentDetail', { treatmentId: item.id })}
    >
      <Text style={styles.treatmentName}>{item.name}</Text>
      <Text>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={treatments}
        renderItem={renderTreatmentItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  treatmentItem: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  treatmentName: {
    fontWeight: 'bold',
  },
});

export default TreatmentLibraryScreen;
