import { Drawer } from 'expo-router/drawer';
import { Text, View } from 'react-native';

export const unstable_settings = {
  initialRouteName: '(auth)',
};

export default function RootLayout() {
  return (
    <Drawer drawerContent={() => <CustomDrawer />}>
      <Drawer.Screen name="Home" />
      <Drawer.Screen name="Links" />
      <Drawer.Screen name="QRcodes" />
    </Drawer>
  );
}

const drawerItem = ['Home', 'Links', 'QRcodes'];
const CustomDrawer = () => {
  return (
    <View className="mt-8 gap-7 pl-9">
      <View className="w-32 items-center justify-center rounded bg-blue-500 p-3">
        <Text className="color-white">Create new</Text>
      </View>
      {drawerItem.map((e) => (
        <Text>{e}</Text>
      ))}
    </View>
  );
};
