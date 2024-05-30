import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { icons } from "../../constants";
import SearchBar from "../../components/SearchBar";
import { CATEGORIES } from "../../constants/data";
import CategoryList from "../../components/CategoryList";
import Categories from "../../components/Categories";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('Location');
  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };
  return (
    <SafeAreaView className={`bg-white`}>
      <ScrollView className={`w-full h-full`}>
        <View>
          <View className={`flex flex-row justify-between`}>
            <View className={`m-8`}>
              <Text className={`text-[20px] font-primaryFont text-black`}>
                Explore
              </Text>
              <Text className={`text-[32px] font-primaryFont500 text-black`}>
                Aspen
              </Text>
            </View>
            <View className={`flex-row m-8 justify-center  flex p-2`}>
              <Image source={icons.pin} className={`w-3 h-3 mr-1`} />
              <Text className="font-secondaryFont text-[16px] ">Aspen,</Text>
              <Text className="font-secondaryFont text-[16px]">USA</Text>
              <Image source={icons.downArrow} className={`w-4 h-4`} />
            </View>
          </View>
          <SearchBar />
          <CategoryList
            selectedCategory={selectedCategory}
            categories={CATEGORIES}
            onCategoryPress={handleCategoryPress}
          />
          <Categories selectedCategory={selectedCategory} />
        </View>
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Home;
