import React from 'react';
import { View, Text, StatusBar, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import { featured } from '../constants';
import LoginScreen from './LoginScreen';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', marginTop: 0 }}>
      <StatusBar barStyle={'dark-content'} />
      {/* Search */}
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingBottom: 10, marginTop:8 }}>
      <View style={{ backgroundColor: themeColors.bgColor(1), padding: 10, borderRadius: 90, marginRight: 5 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Icon.User height={20} width={20} strokeWidth={2.5} stroke="white" />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', padding: 10, borderRadius: 30, borderWidth: 1, borderColor: 'gray' }}>
          <Icon.Search height={25} width={25} color="gray" />
          <TextInput placeholder='Restaurant' style={{ marginLeft: 10, flex: 1 }} />
          <View style={{ flexDirection: 'row', alignItems: 'center', borderLeftWidth: 1, borderLeftColor: 'gray', paddingLeft: 10 }}>
            <Icon.MapPin height={20} width={20} stroke="gray" />
            <Text style={{ color: 'gray' }}>Biên Hòa, VN</Text>
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Featured */}
        <View style={{ marginTop: 5 }}>
          {
            [featured].map((item, index) => {
              return (
                <FeaturedRow
                  key={index}
                  title={item.title}
                  restaurants={item.restaurants}
                  description={item.description}
                />
              )
            })
          }
        </View>
        <View style={{ marginTop: 5 }}>
          {
            [featured].map((item, index) => {
              return (
                <FeaturedRow
                  key={index}
                  title={item.title2}
                  restaurants={item.restaurants2}
                  description={item.description2}
                />
              )
            })
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}