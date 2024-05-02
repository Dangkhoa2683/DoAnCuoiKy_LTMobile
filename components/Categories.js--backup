import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { categories } from '../constants';

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View style={{ marginTop: 10 }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}>
        {categories.map((category, index) => {
          let isActive = category.id === activeCategory;
          let btnStyle = isActive
            ? { backgroundColor: 'gray', padding: 5, borderRadius: 50 }
            : { backgroundColor: 'lightgray', padding: 5, borderRadius: 50 };
          let textStyle = isActive
            ? { fontWeight: 'bold', color: 'darkgray' }
            : { color: 'gray' };

          return (
            <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
              <TouchableOpacity
                onPress={() => setActiveCategory(category.id)}
                style={btnStyle}>
                <Image source={category.image} style={{ width: 45, height: 45 }} />
              </TouchableOpacity>
              <Text style={[{ marginLeft: 10 }, textStyle]}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
