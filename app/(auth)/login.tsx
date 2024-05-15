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
      <ScrollView className="">
        <View className="min-h-80 items-center justify-center ">
          <Image source={AppImages.authImage} className="max-h-96 max-w-96 flex-1" />
        </View>
        <View className="my-10">
          <View>
            <View className="mx-auto w-10/12 sm:mx-auto sm:w-full sm:max-w-sm">
              <Image
                className="mx-auto w-auto"
                source={{ uri: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600' }}
                alt="Your Company"
              />
              <Text className="  text-2xl font-medium leading-9 tracking-tight text-gray-900">
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
                <View className="h-1 flex-1  bg-gray-300" />
                <Text className="text-lg">Or</Text>
                <View className="h-1 w-1 flex-1 bg-gray-300" />
              </View>
              <View className="gap-3">
                <View>
                  <Text className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </Text>
                  <View className="mt-2">
                    <TextInput onChangeText={(e) => setEmail(e)} className={styles.input} />
                  </View>
                </View>
                <View>
                  <Text className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </Text>
                  <View className="mt-2">
                    <TextInput onChangeText={(e) => setPassword(e)} className={styles.input} />
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
                  className="flex w-full justify-center rounded-md bg-indigo-600 p-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
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
