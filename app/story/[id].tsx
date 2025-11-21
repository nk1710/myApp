import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Story() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>Story ID: {id}</Text>
    </View>
  );
}
