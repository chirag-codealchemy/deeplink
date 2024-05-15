import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { getAsyncItem } from '~/utils/asyncStorage';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    getAuthState();
  }, []);

  const getAuthState = async () => {
    navigation.navigate(!!getAsyncItem('LOGIN') ? 'Home' : 'login');
  };

  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;
