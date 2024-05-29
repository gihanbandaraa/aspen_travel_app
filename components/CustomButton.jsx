import { Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ title ,handlePress ,containerStyle,textStyle}) => {
  return (
    <TouchableOpacity 
    activeOpacity={0.8}
    className={`bg-blue-500 rounded-full px-6 py-5 ${containerStyle}`}
    onPress={handlePress}>
      <Text className={` text-white font-primaryFont700 text-[16px] text-center ${textStyle}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
