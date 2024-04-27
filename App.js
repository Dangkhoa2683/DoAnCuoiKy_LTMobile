import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation';
import { Provider } from 'react-redux'
import { store } from './Store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screen/HomeScreen';
import CartScreen from './screen/CartScreen';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (

    <Provider store={store}>
      <Navigation>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Cart" component={CartScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </Navigation>
    </Provider>
  );
}

