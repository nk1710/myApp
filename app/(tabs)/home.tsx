import { Ionicons } from "@expo/vector-icons";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  // Stories data
  const stories = Array.from({ length: 150 }, (_, i) => ({
    id: i.toString(),
    img: `https://picsum.photos/200?random=${i + 1}`,
  }));

  // Feed posts data
  const posts = Array.from({ length: 200 }, (_, i) => ({
    id: i.toString(),
    userImg: `https://picsum.photos/200?random=${i + 100}`,
    postImg: `https://picsum.photos/600?random=${i + 100}`,
    username: `user_${i + 1}`,
    caption: `This is a sample caption for post number ${i + 1} ❤️🔥`,
  }));

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {/* ============================
           Pinstagram Header
      ============================ */}
      <View
        style={{
          height: 60,
          paddingHorizontal: 15,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottomWidth: 0.5,
          borderColor: "#ddd",
        }}
      >
        <Text style={{ fontSize: 26, fontWeight: "bold" }}>Ninstagram</Text>

        <View style={{ flexDirection: "row", gap: 20 }}>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={28} color="black" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="chatbubble-outline" size={28} color="black" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="add-circle-outline" size={28} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* ============================
           Stories (Horizontal Scroll)
      ============================ */}
      <View style={{ paddingVertical: 10 }}>
        <FlatList
          data={stories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ alignItems: "center", marginHorizontal: 8 }}>
              <View
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 50,
                  borderWidth: 2,
                  borderColor: "purple",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{ uri: item.img }}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 50,
                  }}
                />
              </View>
              <Text style={{ fontSize: 12, marginTop: 5 }}>
                User {item.id}
              </Text>
            </View>
          )}
        />
      </View>

      {/* ============================
           Feed Posts (Vertical Scroll)
      ============================ */}
      <FlatList
        data={posts}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20 }}>
            {/* Username Row */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
              }}
            >
              <Image
                source={{ uri: item.userImg }}
                style={{ width: 40, height: 40, borderRadius: 50 }}
              />
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {item.username}
              </Text>
            </View>

            {/* Main Post Image */}
            <Image
              source={{ uri: item.postImg }}
              style={{ width: "100%", height: 350 }}
            />

            {/* Post Actions */}
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                gap: 15,
              }}
            >
              <Ionicons name="heart-outline" size={28} color="black" />
              <Ionicons name="chatbubble-outline" size={28} color="black" />
              <Ionicons name="paper-plane-outline" size={28} color="black" />
            </View>

            {/* Caption */}
            <View style={{ paddingHorizontal: 10 }}>
              <Text style={{ fontWeight: "bold" }}>{item.username}</Text>
              <Text style={{ marginTop: 5 }}>{item.caption}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
