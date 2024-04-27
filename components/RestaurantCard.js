import React from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';

export default function RestaurantCard({ item }) {
  const navigation = useNavigation();


  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Restaurant',{...item})}>
      <View style={{ marginRight: 6, backgroundColor: 'white', borderRadius: 20, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 10, elevation: 5 }}>
        <Image style={{ height: 150, width: 200, borderTopLeftRadius: 20, borderTopRightRadius: 20 }} source={item.image} />
        <View style={{ paddingHorizontal: 10, paddingBottom: 10, paddingTop: 8 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 3 }}>
            <Image source={require('../assets/images/star.png')} style={{ height: 15, width: 15 }} />
            <Text style={{ fontSize: 12, color: 'gray' }}>
              <Text style={{ color: 'green' }}>{item.stars}</Text> ({item.reviews} review) . <Text style={{ fontWeight: 'bold' }}>{item.category}</Text>
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 3 }}>
            <Icon.MapPin color="gray" width={15} height={15} />
            <Text style={{ fontSize: 12, color: 'gray' }}>Nearby. {item.address}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
