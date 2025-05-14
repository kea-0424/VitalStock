import React from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

export default function ScanAnimalScreen() {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan Animal</Text>
      <Image
        source={require('c:/Users/Admin/Pictures/chickenreclinebig.webp')} 
        style={styles.image}
      />
      <TouchableOpacity style={styles.uploadBtn}>
        <Text style={styles.uploadText}>Upload Image</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Symptoms (Optional)"
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.analyzeBtn}
        onPress={() => navigation.navigate('AI Diagnosis')} 
      >
        <Text style={styles.analyzeText}>Analyze with AI</Text>
      </TouchableOpacity>
    </View>
  );
}
