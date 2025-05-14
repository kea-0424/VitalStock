import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to VitalStock</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Scan Animal')}
      >
        <Text style={styles.cardText}>Scan Animal</Text>
      </TouchableOpacity>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 40 },
  card: {
    backgroundColor: '#065F46',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  cardText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
