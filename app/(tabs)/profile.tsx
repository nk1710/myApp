import { FlatList, Image, Text, View } from "react-native";

export default function Profile() {
  const posts = Array.from({ length: 30 }, (_, i) => ({
    id: i.toString(),
    img: `https://picsum.photos/400?random=${i + 100}`,
  }));

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      
      {/* Profile Header */}
      <View
        style={{
          flexDirection: "row",
          padding: 20,
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={{ width: 90, height: 90, borderRadius: 100 }}
        />

        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-around",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>30</Text>
            <Text>Posts</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>250</Text>
            <Text>Followers</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>180</Text>
            <Text>Following</Text>
          </View>
        </View>
      </View>

      {/* Username */}
      <Text style={{ paddingHorizontal: 20, fontSize: 16, fontWeight: "bold" }}>
        Nikhil Singh
      </Text>

      {/* Posts Grid */}
      <FlatList
        data={posts}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.img }}
            style={{ width: "33.33%", height: 130 }}
          />
        )}
      />
    </View>
  );
}
