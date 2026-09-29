import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { styles } from '../styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Velvet Bloom</Text>
      <Text style={styles.subtitle}>
        Discover elegant fragrances made to linger beautifully on your skin.
      </Text>

      <Pressable
        style={styles.primaryButton}
        onPress={() => navigation.navigate('PerfumeList')}
      >
        <Text style={styles.primaryButtonText}>Browse Collection</Text>
      </Pressable>
    </View>
  );
}