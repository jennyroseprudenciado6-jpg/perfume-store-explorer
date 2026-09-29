import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import PerfumeListScreen from './screens/PerfumeListScreen';
import PerfumeDetailsScreen from './screens/PerfumeDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PerfumeList"
          component={PerfumeListScreen}
          options={{ title: 'Perfume Collection' }}
        />
        <Stack.Screen
          name="PerfumeDetails"
          component={PerfumeDetailsScreen}
          options={{ title: 'Fragrance Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}