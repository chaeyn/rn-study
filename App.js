import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "gray" }}></View>
      <View style={{ flex: 10, backgroundColor: "black" }}></View>
      <View style={{ flex: 1, backgroundColor: "gray" }}></View>
    </View>
  );
}
