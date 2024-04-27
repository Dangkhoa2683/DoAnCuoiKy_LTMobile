import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { emptyCart } from '../slices/CartSlice';
import { themeColors } from '../theme';

export default function OrderPreparingScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const removeOrder = () => {
        navigation.navigate('Home');
        dispatch(emptyCart());
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../assets/images/aDeli.gif')} style={{ height: 250, width: 250 }} />
            <TouchableOpacity onPress={removeOrder} style={{ backgroundColor: themeColors.bgColor(1) }}
                className="p-3 rounded-full">
                <Text className="text-white text-center font-bold text-lg"> Go back to HomeScreen</Text>
            </TouchableOpacity>
        </View>
    );
}
