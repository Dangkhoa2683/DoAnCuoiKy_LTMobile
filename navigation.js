import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './screen/HomeScreen';
import ResScreen from './screen/ResScreen';
import CartScreen from './screen/CartScreen';
import OrderCompleted from './screen/OrderCompleted';
import LoginScreen from './screen/LoginScreen';


const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {
          headerShown: false
        }
      }>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Restaurant" component={ResScreen} />
        <Stack.Screen name="Cart" options={{presentation:'modal'}} component={CartScreen} />
        <Stack.Screen name="OrderCompleted" options={{presentation:'fullScreenModal'}} component={OrderCompleted} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}