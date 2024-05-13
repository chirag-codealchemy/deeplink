import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  useEffect(() => {
    console.log('THIS IS CALL ');
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>asd</Text>
      </View>
    </SafeAreaView>
  );
}
