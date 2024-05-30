import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { icons } from '../constants'

const SearchBar = () => {
  return (
    <View className="flex flex-row items-center bg-[#F3F8FE] py-4 mx-5 px-3 rounded-full mt-2 mb-4">
      <Image source={icons.search} className="w-4 h-4 mr-2 opacity-25" />
      <TextInput
        placeholder="Find things to do"
        placeholderTextColor="#B8B8B8"
        className="flex-1 text-gray-700"
      />
    </View>
  );
};

export default SearchBar;











