import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../slices/CartSlice';

export default function Cart() {
    const navigation = useNavigation();
    const cartItems =useSelector(selectCartItems);
    const cartTotal =useSelector(selectCartTotal);
    if(!cartItems.length)  return;


    return (
        <View style={{ position: 'absolute', bottom: 20, width: '100%', zIndex: 40 }}>
            <TouchableOpacity 
            onPress={() => {
                   navigation.navigate('Cart')

                }}
            style={{ backgroundColor: themeColors.bgColor(1), borderRadius: 10, marginHorizontal: 20, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: 100, padding: 8 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>{cartItems.length}</Text>
                    </View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', flex: 1, textAlign: 'center' }}>View Cart</Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>${cartTotal}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
