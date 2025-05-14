import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import database from '@react-native-firebase/database';

const TreatmentDetailScreen = ({ route }) => {
  const { treatmentId } = route.params;
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    const fetchTreatmentDetail = async () => {
      try {
        const snapshot = await database()
          .ref(`treatments/${treatmentId}`)
          .once('value');
        const data = snapshot.val();
        setTreatment(data);
      } catch (error) {
        console.error('Error fetching treatment details:', error);
      }
    };

    fetchTreatmentDetail();
  }, [treatmentId]);

  if (!treatment) return <Text>Loading...</Text>;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{treatment.name}</Text>
      <Text style={styles.description}>{treatment.description}</Text>
      <Text style={styles.label}>Dosage:</Text>
      <Text>{treatment.dosage}</Text>
      <Text style={styles.label}>Side Effects:</Text>
      <Text>{treatment.sideEffects}</Text>
      <Text style={styles.label}>Related Conditions:</Text>
      <Text>{treatment.relatedConditions}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default TreatmentDetailScreen;
