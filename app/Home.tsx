import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { clearAsyncStorage } from '~/utils/asyncStorage';
import { useNavigation } from 'expo-router';

const Home = () => {
  const navigation = useNavigation();
  const handleLogout = async () => {
    clearAsyncStorage();
    navigation.navigate('(auth)', { screen: 'login' });
  };
  return (
    <View>
      <TouchableOpacity onPress={handleLogout}>
        <Text>logout</Text>
      </TouchableOpacity>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
