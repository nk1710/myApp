import { Ionicons } from "@expo/vector-icons";
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const { height } = Dimensions.get("window");

export default function Reels() {
  const reels = Array.from({ length: 10 }, (_, i) => ({
    id: i.toString(),
    video: `https://picsum.photos/800?random=${i + 1}`,
    user: `user_${i + 1}`,
  }));

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <FlatList
        data={reels}
        keyExtractor={(item) => item.id}
        pagingEnabled
        snapToAlignment="center"
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{ height: height, justifyContent: "center" }}>
            
            {/* FULL SCREEN REEL */}
            <Image
              source={{ uri: item.video }}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
            />

            {/* RIGHT SIDE ICONS (LIKE - COMMENT - SHARE) */}
            <View
              style={{
                position: "absolute",
                right: 20,
                bottom: 120,
                alignItems: "center",
                gap: 20,
              }}
            >
              <TouchableOpacity>
                <Ionicons name="heart-outline" size={32} color="white" />
              </TouchableOpacity>

              <TouchableOpacity>
                <Ionicons name="chatbubble-outline" size={32} color="white" />
              </TouchableOpacity>

              <TouchableOpacity>
                <Ionicons name="paper-plane-outline" size={32} color="white" />
              </TouchableOpacity>

              {/* User Profile Mini */}
              <Image
                source={{ uri: "https://picsum.photos/200" }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 50,
                  borderWidth: 2,
                  borderColor: "white",
                  marginTop: 10,
                }}
              />
            </View>

            {/* BOTTOM USERNAME + AUDIO NAME */}
            <View
              style={{
                position: "absolute",
                bottom: 40,
                left: 20,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                @{item.user}
              </Text>

              <Text style={{ color: "#ddd", marginTop: 4 }}>
                Original Audio 🎵
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
