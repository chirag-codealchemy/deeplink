import { FlatList, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';

const Home = () => {
  const { width, height } = useWindowDimensions();
  const numColumns = Math.floor(width / 460);
  return (
    <View className="flex-1 items-center justify-center ">
      <Text>Home</Text>
      <FlatList
        key={numColumns}
        numColumns={Math.floor(width / 460)}
        className="w-full gap-4 bg-red-400"
        contentContainerClassName="gap-4 bg-red-200"
        columnWrapperClassName={numColumns > 1 ? 'gap-4' : ''}
        data={[
          'Make a short link or QR Code.',
          'Make a short link or QR Code.',
          'Make a short link or QR Code.',
          'Make a short link or QR Code.',
          'Make a short link or QR Code.',
          'Make a short link or QR Code.',
        ]}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity className="w-full max-w-md rounded-md bg-gray-300 p-4 text-lg font-medium text-black">
              <Text>{item}</Text>
              <View className="flex flex-row items-center justify-between">
                <Text>Create a Link</Text>
                <Text>Create a QR Code</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Home;
