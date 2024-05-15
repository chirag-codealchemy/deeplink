import { Link, useNavigation } from 'expo-router';
import { useState } from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSubmit = async () => {
    if (!email) {
      Alert.alert('Enter the Email');
    } else if (!password) {
      Alert.alert('Enter the Password');
    } else {
      navigation.navigate('login');
    }
  };

  return (
    <SafeAreaView className="flex-1  justify-center">
      <View className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <View className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-10 w-auto"
            source={{ uri: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600' }}
            alt="Your Company"
          />
          <Text className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to your account
          </Text>
        </View>

        <View className="mt-10 w-full rounded-lg p-8 shadow-xl sm:mx-auto sm:w-full sm:max-w-sm">
          <View className="gap-4 space-y-6">
            <View>
              <Text className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </Text>
              <View className="mt-2">
                <TextInput onChangeText={(e) => setEmail(e)} className={styles.input} />
              </View>
            </View>

            <View>
              <View className="flex flex-row items-center justify-between">
                <Text className="block text-sm font-medium leading-6 text-gray-900">Password</Text>
                <View className="text-sm">
                  <Link
                    href="#"
                    className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </Link>
                </View>
              </View>
              <View className="mt-2">
                <TextInput onChangeText={(e) => setPassword(e)} className={styles.input} />
              </View>
            </View>

            <View>
              <TouchableOpacity
                onPress={handleSubmit}
                className="flex w-full justify-center rounded-md bg-indigo-600 p-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <Text className="text-center color-white"> Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Link
            href="/register"
            className="mt-4 text-center text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Dont have an account?
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = {
  input:
    'block w-full rounded-md border border-gray-200 py-3 pl-2 text-gray-900  placeholder:text-gray-400 sm:text-sm sm:leading-6',
};
