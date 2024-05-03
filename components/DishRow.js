import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { themeColors } from '../theme';
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart, removeFormCart, selectCartItemsById } from '../slices/CartSlice';
import { useNavigation } from '@react-navigation/native';

export default function DishRow({ item }) {
    const dispatch = useDispatch();
    const totalItems = useSelector(state => selectCartItemsById(state, item.id));
    const navigation = useNavigation(); 

    const handleIncrease = () => {
        dispatch(addtoCart({...item}));
    };
    
    const handleDecrease = () => {
        dispatch(removeFormCart({id: item.id}));
    };

    /* const onPressProduct = () => {
        navigation.navigate('Product', { productId: item.id });
    }; */

    return (
        <TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 12, borderRadius: 20, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 10, marginBottom: 10, marginHorizontal: 10 }}>
                <Image style={{ height: 100, width: 100, borderRadius: 20 }} source={item.image} />
                <View style={{ flex: 1, marginLeft: 12 }}>
                    <View style={{ paddingLeft: 12 }}>
                        <Text style={{ fontSize: 20 }}>{item.name}</Text>
                        <Text style={{ color: 'gray' }}>{item.description}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 12 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'gray' }}>
                            ${item.price}
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={handleDecrease}
                                disabled={!totalItems.length}
                                style={{ backgroundColor: themeColors.bgColor(1), borderRadius: 15, padding: 8 }}
                            >
                                <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10, marginRight: 10 }}>
                                {totalItems.length}
                            </Text>
                            <TouchableOpacity
                                onPress={handleIncrease}
                                style={{ backgroundColor: themeColors.bgColor(1), borderRadius: 15, padding: 8 }}
                            >
                                <Icon.Plus strokeWidth={2} height={20} width={20} stroke={'white'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}
