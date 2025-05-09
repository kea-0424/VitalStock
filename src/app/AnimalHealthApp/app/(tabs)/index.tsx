import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  ScanAnimal: undefined;
  HealthReports: undefined;
  AISuggestions: undefined;
};

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const userName = 'Veronica';

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello, {userName}</Text>

      {/* Scan Animal */}
      <TouchableOpacity
        style={styles.cardLarge}
        onPress={() => navigation.navigate('ScanAnimal')}
      >
        <Image
          source={require('../../assets/images/camera.png')}
          style={styles.icon}
        />
        <Text style={styles.cardText}>Scan Animal</Text>
      </TouchableOpacity>

      {/* Health Reports & AI Suggestions */}
      <View style={styles.bottomRow}>
        <TouchableOpacity
          style={styles.cardSmall}
          onPress={() => navigation.navigate('HealthReports')}
        >
          <Image
            source={require('../../assets/images/ai.png')}
            style={styles.smallIcon}
          />
          <Text style={styles.cardTextSmall}>Health Reports</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cardSmall}
          onPress={() => navigation.navigate('AISuggestions')}
        >
          <Image
            source={require('../../assets/images/health.png')}
            style={styles.smallIcon}
          />
          <Text style={styles.cardTextSmall}>AI Suggestions</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(250 242 242)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  greeting: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  cardLarge: {
    backgroundColor: '#ffffff',
    width: '90%',
    alignItems: 'center',
    paddingVertical: 40,
    borderRadius: 20,
    marginBottom: 50,
    elevation: 5, // shadow for Android
    shadowColor: '#000', // shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  icon: {
    width: 40,
    height: 40,
    tintColor: '#014421',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#014421',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  cardSmall: {
    backgroundColor: '#ffffff',
    width: '48%',
    alignItems: 'center',
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  smallIcon: {
    width: 30,
    height: 30,
    tintColor: '#014421',
    marginBottom: 10,
  },
  cardTextSmall: {
    fontSize: 14,
    fontWeight: '500',
    color: '#014421',
    textAlign: 'center',
  },
});

export default HomeScreen;
