import { Platform, SafeAreaView, StatusBar, Text } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Text className="text-3xl text-red-500">Uber Clone</Text>
    </SafeAreaView>
  );
}
