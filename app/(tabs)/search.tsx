import { FlatList, Image, TextInput, View } from "react-native";

export default function Search() {
  // Generate 60 random images for explore feed
  const images = Array.from({ length: 600 }, (_, i) => ({
    id: i.toString(),
    url: `https://picsum.photos/400?random=${i + 1}`,
  }));

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      
      {/* Search Bar */}
      <View style={{ padding: 10 }}>
        <TextInput
          placeholder="Search"
          style={{
            backgroundColor: "#eee",
            padding: 12,
            borderRadius: 10,
          }}
        />
      </View>

      {/* Explore Grid */}
      <FlatList
        data={images}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.url }}
            style={{
              width: "33.33%",
              height: 140,
              borderWidth: 1,
              borderColor: "#fff",
            }}
          />
        )}
      />
    </View>
  );
}
