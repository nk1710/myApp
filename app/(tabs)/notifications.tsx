import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function Notifications() {
  const activity = Array.from({ length: 200 }, (_, i) => ({
    id: i.toString(),
    img: `https://picsum.photos/200?random=${i + 30}`,
    user: `user_${i + 1}`,
    text: "liked your photo ❤️",
  }));

  return (
    <View style={{ flex: 1, backgroundColor: "white", paddingTop: 15 }}>
      <FlatList
        data={activity}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
              paddingHorizontal: 15,
            }}
          >
            <Image
              source={{ uri: item.img }}
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
            <Link href="/(tabs)/notifications">
   <Ionicons name="heart-outline" size={28} color="black" />
</Link>


            <Text style={{ marginLeft: 10, fontSize: 16 }}>
              <Text style={{ fontWeight: "bold" }}>{item.user}</Text> {item.text}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
