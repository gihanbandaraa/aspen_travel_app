import React from "react";
import { FlatList, TouchableOpacity, Text, StyleSheet } from "react-native";

const CategoryList = ({ categories, selectedCategory, onCategoryPress }) => {
  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryButton,
        selectedCategory === item.title && styles.selectedCategoryButton,
      ]}
      onPress={() => onCategoryPress(item.title)}
    >
      <Text
        style={[
          styles.categoryText,
          selectedCategory === item.title && styles.selectedCategoryText,
        ]}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.title}
      renderItem={renderCategory}
      horizontal
      style={styles.categoryList}
      showsHorizontalScrollIndicator={false}
    
    />
  );
};

const styles = StyleSheet.create({
  categoryList: {
    marginVertical: 16,
    marginHorizontal: 32,
  },
  categoryButton: {

    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  selectedCategoryButton: {
    backgroundColor: "#196EEE0D",
    borderRadius: 33,
  },
  selectedCategoryText: {
    color: "#176FF2",
  },
  categoryText: {
    fontSize: 18,
    color: "#B8B8B8",
    fontFamily: "CircularXX",
  },
});

export default CategoryList;
