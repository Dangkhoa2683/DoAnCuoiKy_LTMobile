import React, { useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import DishRow from '../components/DishRow';
import Cart from '../components/Cart';
import { StatusBar } from 'expo-status-bar';
import { setRestaurant } from '../slices/RestaurantSlice';

export default function ResScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const item = params;

  useEffect(() => {
    if (item && item.id) {
      dispatch(setRestaurant({...item}));
    }
  }, [dispatch, item]);

  return (
    <View>
      <Cart />
      <StatusBar style="light" />
      <ScrollView>
        {item && (
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={item.image} />
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}>
              <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.detailsContainer}>
          {item && (
            <>
              <Text style={styles.restaurantName}>{item.name}</Text>
              <View style={styles.infoContainer}>
                <Image source={require('../assets/images/star.png')} style={{height:15,width:15}} />
                <Text style={styles.infoText}>
                  <Text style={styles.greenText}>{item.stars}</Text> ({item.reviews} review) .{' '}
                  <Text style={styles.boldText}>{item.category}</Text>
                </Text>
              </View>
              <View style={styles.infoContainer}>
                <Icon.MapPin color="gray" width={15} height={15} />
                <Text style={styles.infoText}>Nearby. {item.address}</Text>
              </View>
              <Text style={styles.description}>{item.description}</Text>
            </>
          )}
        </View>
        <View style={styles.menuContainer}>
          <Text style={styles.menuHeader}>Menu</Text>
          {item && item.dishes.map((dish, index) => (
            <DishRow item={dish} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 250,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    padding: 10,
  },
  detailsContainer: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: 'white',
    paddingTop: 20,
    marginTop: -20,
    paddingHorizontal: 20,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  infoText: {
    fontSize: 12,
    color: 'gray',
  },
  greenText: {
    color: 'green',
  },
  boldText: {
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    color: 'gray',
    marginTop: 2,
  },
  menuContainer: {
    backgroundColor: '#fff',
    marginBottom: 40,
  },
  menuHeader: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
