import AsyncStorage from '@react-native-async-storage/async-storage';

export type asyncKeys = 'LOGIN';

export const getAsyncItem = async (key: asyncKeys) =>
  JSON.parse((await AsyncStorage.getItem(key)) || '{}');

export const setAsyncItem = (key: asyncKeys, val: any) =>
  AsyncStorage.setItem(key, JSON.stringify(val));

export const clearAsyncStorage = async () => await AsyncStorage.clear();

export const removeAsyncItem = async (key: asyncKeys) => AsyncStorage.removeItem(key);
