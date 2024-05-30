import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { RECOMMENDED } from "../../constants/data";

const RecommendedPlace = () => {
  const renderRecommendedItem = ({ item }) => (
    <View style={{ marginHorizontal: 8 }}>
      <Image
        source={item.imageUrl}
        style={{ width: 166, height: 96, borderRadius: 10 }}
      />

      <Text
        style={{
          position: "absolute",
          fontSize: 14,
          color: "white",
          right: 10,
          bottom: 14,
          backgroundColor: "#3A544F",
          padding: 4,
          color: "#FFFFFF",
          borderRadius: 10,
          borderWidth: 2,
          borderColor: "white",
          fontFamily: "Montserrat700",
        }}
      >
        {item.disc}
      </Text>

      <Text style={{ fontSize: 18, marginTop: 5, fontFamily: "CircularXX" }}>
        {item.title}
      </Text>
    </View>
  );

  return (
    <View className="mx-8">
      <Text className="font-primaryFont700 text-2xl">Recommended</Text>
      <FlatList
        data={RECOMMENDED}
        keyExtractor={(item) => item.title}
        renderItem={renderRecommendedItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 10 }}
      />
    </View>
  );
};

export default RecommendedPlace;
