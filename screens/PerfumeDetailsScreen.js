import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';

import { styles } from '../styles';

export default function PerfumeDetailsScreen({ route, navigation }) {
  const { perfume } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.detailContainer}>
      <Text style={styles.detailName}>{perfume.name}</Text>
      <Text style={styles.detailBrand}>{perfume.brand}</Text>
      <Text style={styles.detailPrice}>{perfume.price}</Text>

      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.detailText}>{perfume.description}</Text>

      <Text style={styles.sectionTitle}>Notes</Text>
      <Text style={styles.detailText}>{perfume.notes}</Text>

      <Pressable
        style={styles.secondaryButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.secondaryButtonText}>Go Back</Text>
      </Pressable>
    </ScrollView>
  );
}