import React, { useState } from "react";
import {
  FlatList,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { icons } from "../../constants/index";
import { AntDesign } from "@expo/vector-icons";
import { LOCATIONS, HOTELS } from "../../constants/data";

const CategoryDetails = ({ data }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (item) => {
    const updatedData = data.map((dataItem) => {
      if (dataItem.title === item.title) {
        return {
          ...dataItem,
          isFavourite: !dataItem.isFavourite,
        };
      }
      return dataItem;
    });

    setFavorites(updatedData.filter((item) => item.isFavourite));

    if (data === LOCATIONS) {
      LOCATIONS.forEach((location, index) => {
        if (location.title === item.title) {
          LOCATIONS[index].isFavourite = updatedData[index].isFavourite;
        }
      });
    } else if (data === HOTELS) {
      HOTELS.forEach((hotel, index) => {
        if (hotel.title === item.title) {
          HOTELS[index].isFavourite = updatedData[index].isFavourite;
        }
      });
    }
  };

  const renderDetail = ({ item }) => (
    <ImageBackground source={item.imageUrl} style={styles.imageBackground}>
      <View style={styles.detailContainer}>
        <View className="gap-1">
          <Text style={styles.detailTitle}>{item.title}</Text>
          <View className="flex flex-row items-center  bg-[#4D5652] py-1 px-3 rounded-full w-14">
            <Image source={icons.star} className="w-3 h-3 " />
            <Text style={styles.detailRatings}>{item.ratings}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => toggleFavorite(item)}
          style={styles.favoriteButton}
        >
          <AntDesign
            name={item.isFavourite ? "heart" : "hearto"}
            size={18}
            color={item.isFavourite ? "#EC5655" : "black"}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );

  return (
    <View style={styles.container}>
      {data.length > 0 ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item.title}
          renderItem={renderDetail}
          horizontal
          contentContainerStyle={styles.contentContainer}
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <Text style={styles.emptyMessage}>Currently No items available in this category</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyMessage: {
    fontSize: 18,
    color: 'grey',
    textAlign: 'center',
    fontFamily: "Montserrat",
  },
  contentContainer: {
    paddingBottom: 20,
  },
  detailContainer: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  detailTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "CircularXX",
    fontWeight: "bold",
    backgroundColor: "#4D5652",
    borderRadius: 60,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  detailRatings: {
    color: "#FFFFFF",
    fontFamily: "CircularXX",
    fontSize: 16,
    marginLeft: 5,
   
  },
  imageBackground: {
    width: 188,
    height: 260,
    marginHorizontal: 8,
    borderRadius: 20,
    overflow: "hidden",
    display: "flex",
    justifyContent: "flex-end",
  },
  favoriteButton:{
    backgroundColor: "#F3F8FE",
    padding:5,
    borderRadius: 20,
  }
});

export default CategoryDetails;
