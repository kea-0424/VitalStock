import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Picker } from 'react-native';

const reports = [
  { id: '1', disease: 'Mastitis', date: '20 Jan 2025', treated: true, animal: 'Cow' },
  { id: '2', disease: 'Bloat', date: '20 Jan 2025', treated: false, animal: 'Cow' },
  { id: '3', disease: 'Fowl Pox', date: '20 Jan 2025', treated: true, animal: 'Chicken' },
  { id: '4', disease: 'Avian Influenza', date: '20 Jan 2025', treated: false, animal: 'Chicken' },
];

export default function HealthReportHistoryPage() {
  const [selectedAnimal, setSelectedAnimal] = useState('All');
  const [selectedDisease, setSelectedDisease] = useState('All');

  const filteredReports = reports.filter(report => {
    return (
      (selectedAnimal === 'All' || report.animal === selectedAnimal) &&
      (selectedDisease === 'All' || report.disease === selectedDisease)
    );
  });

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.disease}</Text>
      <Text>{item.date}</Text>
      <Text style={{ color: item.treated ? 'green' : 'red' }}>
        {item.treated ? 'Treated ✓' : 'Untreated ✗'}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Health Report History Page</Text>

      <View style={styles.filters}>
        <Picker selectedValue={selectedAnimal} style={styles.picker} onValueChange={val => setSelectedAnimal(val)}>
          <Picker.Item label="All Animals" value="All" />
          <Picker.Item label="Cow" value="Cow" />
          <Picker.Item label="Chicken" value="Chicken" />
        </Picker>
        <Picker selectedValue={selectedDisease} style={styles.picker} onValueChange={val => setSelectedDisease(val)}>
          <Picker.Item label="All Diseases" value="All" />
          <Picker.Item label="Mastitis" value="Mastitis" />
          <Picker.Item label="Bloat" value="Bloat" />
          <Picker.Item label="Fowl Pox" value="Fowl Pox" />
          <Picker.Item label="Avian Influenza" value="Avian Influenza" />
        </Picker>
      </View>

      <FlatList data={filteredReports} keyExtractor={item => item.id} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  filters: { flexDirection: 'row', marginBottom: 10 },
  picker: { flex: 1, height: 50 },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  title: { fontSize: 18, fontWeight: '600' },
});
