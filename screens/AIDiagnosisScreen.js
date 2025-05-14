// screens/AIDiagnosisScreen.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AIDiagnosisScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Diagnosis</Text>

      <View style={styles.diagnosisBox}>
        <Text style={styles.label}>Predicted disease</Text>
        <Text style={styles.disease}>Fowl Pox</Text>
        <Text style={styles.percentage}>78%</Text>
      </View>

      <View style={styles.symptomsBox}>
        <Text style={styles.subTitle}>Symptoms</Text>
        <Text style={styles.text}>
          Wart-like lesions on skin or mouth.
        </Text>

        <Text style={styles.subTitle}>Treatment Recommendations</Text>
        <Text style={styles.text}>• Supportive care</Text>
        <Text style={styles.text}>• Vaccinate unaffected birds</Text>
        <Text style={styles.text}>• Apply iodine violet on lesions</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TreatmentLibrary')}
      >
        <Text style={styles.buttonText}>Treatment Library</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AIDiagnosisScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  diagnosisBox: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: 'gray',
  },
  disease: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
  percentage: {
    fontSize: 16,
    color: 'green',
    marginTop: 5,
  },
  symptomsBox: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 30,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#004d26',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
