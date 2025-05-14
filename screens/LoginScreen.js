
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Login Failed', 'Please enter both username and password.');
    }
  };

  return (
    <View style={styles.container}>
      
      <Image 
        source={require('c:\Users\Admin\Pictures\VITAL STOCK.png')} 
        style={styles.logo}
      />

      <Text style={styles.title}>VitalStock Login</Text>

      <TextInput
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  logo: { width: 100, height: 100, alignSelf: 'center', marginBottom: 20 }, // Adjust logo size
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 40 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 8, marginBottom: 20 },
  button: { backgroundColor: '#065F46', padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
