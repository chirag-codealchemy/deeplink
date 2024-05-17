import { Link, useNavigation } from 'expo-router';
import { useState } from 'react';
import { Alert, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppImages } from '~/assets/images';
import { GoogleSvg } from '~/assets/svg';

import { setAsyncItem } from '~/utils/asyncStorage';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const handleSubmit = () => {
    if (!email) {
      Alert.alert('Enter the Email');
    } else if (!password) {
      Alert.alert('Enter the Password');
    } else {
      setAsyncItem('LOGIN', true);
      navigation.navigate('Home');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <View className="h-dvh w-dvw max-w-screen-xl flex-auto justify-center px-10 md:flex-row">
          <View className="flex-1 items-center justify-center">
            <Image
              source={AppImages.authImage}
              resizeMode="contain"
              className="!h-full sm:!w-full"
            />
          </View>
          <View className="flex-1 md:self-center ">
            <View className="w-full  sm:mx-auto sm:max-w-sm">
              <Text className="  text-2xl font-medium  leading-9 tracking-tight text-gray-900">
                Log In and Start Sharing
              </Text>
              <Text className="  text-sm font-medium  leading-9 tracking-tight text-gray-900">
                Don't have an account? <Text className="color-blue-600">Sign up</Text>
              </Text>
              <View className="mt-7 flex-row items-center justify-center gap-4 rounded-lg border py-2">
                <GoogleSvg />
                <Text>Continue With Google</Text>
              </View>
              <View className="flex-row items-center justify-center gap-4">
                <View className="flex-1 border-t border-gray-200" />
                <Text className="text-lg">Or</Text>
                <View className="flex-1 border-t border-gray-200" />
              </View>
              <View className="gap-3">
                <View>
                  <Text className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </Text>
                  <View className="mt-2">
                    <TextInput
                      className={styles.input}
                      placeholder="Enter email"
                      onChangeText={(e) => setEmail(e)}
                    />
                  </View>
                </View>
                <View className="w-full">
                  <Text className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </Text>
                  <View className="mt-2">
                    <TextInput
                      className={styles.input}
                      placeholder="Enter password"
                      onChangeText={(e) => setPassword(e)}
                    />
                  </View>
                </View>
                <View className=" flex-row  items-center justify-end">
                  <View className="text-sm">
                    <Link
                      href="#"
                      className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </Link>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={handleSubmit}
                  className="mb-10 mt-3  flex w-full justify-center rounded-md bg-indigo-600 p-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <Text className="text-center color-white"> Sign in</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
  input:
    'block w-full rounded-md border border-gray-200 py-3 pl-2 text-gray-900  placeholder:text-gray-400 sm:text-sm sm:leading-6',
};
