import React from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import CategoryDetails from "./CategoryDetails";
import { LOCATIONS, HOTELS } from "../../constants/data";


const Categories = ({ selectedCategory }) => {
  const getCategoryData = () => {
    switch (selectedCategory) {
      case "Location":
        return LOCATIONS;
      case "Hotels":
        return HOTELS;
      default:
        return [];
    }
  };

  return (
    <View style={styles.container}>
      <View className="flex flex-row justify-between">
        <Text style={styles.header}>Popular</Text>
        <TouchableOpacity>
          <Text className='text-secondary font-secondaryFont text-base'>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.detailsSection}>
        <CategoryDetails data={getCategoryData()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    marginHorizontal: 8,
  },
  header: {
    fontSize: 24,
    fontFamily: "Montserrat700",
    marginHorizontal: 8,
    color: "#232323",
  },
  detailsSection: {
    flex: 1,
    marginTop: 16,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});

export default Categories;
