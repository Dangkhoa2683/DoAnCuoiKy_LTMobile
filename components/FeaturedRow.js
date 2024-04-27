import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { themeColors } from '../theme';
import RestaurantCard from './RestaurantCard';

export default function FeaturedRow({ title, description, restaurants }) {
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }}>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{title}</Text>
          <Text style={{ color: 'gray', fontSize: 12 }}>{description}</Text>
        </View>
        <TouchableOpacity onPress={() => console.log('See All pressed')}>
          <Text style={{ color: themeColors.text, fontWeight: 'bold' }}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10, paddingBottom: 20 }}>
        {restaurants.map(restaurant => (
          <RestaurantCard key={restaurant.id} item={restaurant} />
        ))}
      </ScrollView>
    </View>
  );
}
