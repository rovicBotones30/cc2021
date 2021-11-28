import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/Home';
import ProfileScreen from './components/ProfileScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name=" "
          component={HomeScreen}
          options={{ headerLayoutPreset: 'center' }, { alignSelf: 'center' }, { headerShown: false }}
        />
        <Stack.Screen name="BMI" component={ProfileScreen} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};



