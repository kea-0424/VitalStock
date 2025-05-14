
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ScanAnimalScreen from '../screens/ScanAnimalScreen';
import AIDiagnosisScreen from '../screens/AIDiagnosisScreen';
import TreatmentLibraryScreen from '../screens/TreatmentLibraryScreen';
import TreatmentDetailScreen from '../screens/TreatmentDetailScreen';
import HealthReportScreen from '../screens/HealthReportScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ title: 'Login' }} 
      />
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Home' }} 
      />
      <Stack.Screen 
        name="Scan Animal" 
        component={ScanAnimalScreen} 
        options={{ title: 'Scan Animal' }} 
      />
      <Stack.Screen 
        name="AI Diagnosis" 
        component={AIDiagnosisScreen} 
        options={{ title: 'AI Diagnosis' }} 
      />
      <Stack.Screen 
        name="TreatmentLibrary" 
        component={TreatmentLibraryScreen} 
        options={{ title: 'Treatment Library' }} 
      />
      <Stack.Screen 
        name="TreatmentDetail" 
        component={TreatmentDetailScreen} 
        options={({ route }) => ({ title: `Treatment: ${route.params.treatmentId}` })} 
      />
      <Stack.Screen 
        name="HealthReport" 
        component={HealthReportScreen} 
        options={{ title: 'Health Report' }} 
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
