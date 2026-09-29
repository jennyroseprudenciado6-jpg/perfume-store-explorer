import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { styles } from '../styles';

const perfumes = [
  {
    id: '1',
    name: 'Rose Silk',
    brand: 'Velvet Bloom',
    price: '$78',
    description:
      'A soft, romantic floral blend with velvety rose petals and smooth amber warmth.',
    notes: 'Rose, peony, vanilla musk',
  },
  {
    id: '2',
    name: 'Citrus Veil',
    brand: 'Velvet Bloom',
    price: '$64',
    description:
      'An uplifting citrus burst balanced with neroli and a fresh white tea finish.',
    notes: 'Mandarin, neroli, white tea',
  },
  {
    id: '3',
    name: 'Midnight Oud',
    brand: 'Velvet Bloom',
    price: '$92',
    description:
      'A deep and mysterious fragrance layered with oud, saffron, and smoky woods.',
    notes: 'Oud, saffron, cedarwood',
  },
  {
    id: '4',
    name: 'Golden Bloom',
    brand: 'Velvet Bloom',
    price: '$70',
    description:
      'A radiant floral scent with golden jasmine and bright sandalwood undertones.',
    notes: 'Jasmine, saffron, sandalwood',
  },
];

export default function PerfumeListScreen({ navigation }) {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={perfumes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('PerfumeDetails', { perfume: item })}
          >
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardBrand}>{item.brand}</Text>
            <Text style={styles.cardPrice}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}