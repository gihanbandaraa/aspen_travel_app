import { StatusBar } from "expo-status-bar";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { Redirect ,router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <ImageBackground
      source={images.background}
      className="flex-1 w-full"
      resizeMode="cover"
    >
      <SafeAreaView className="flex-1 w-full">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          className="flex-grow-1"
        >
          <View className="justify-center items-center">
            <Text className="font-titleFont text-primary text-[144px] mt-28 tracking-[15]">
              Aspen
            </Text>
          </View>

          <View className="flex-1 justify-end ml-8 mr-8 pb-10">
            <View className="mb-10">
              <Text className="font-primaryFont   text-white text-[35px]">
                Plan your
              </Text>
              <Text className="font-primaryFont500  text-white text-[48px] ">
                Luxurious
              </Text>
              <Text className="font-primaryFont500  text-white text-[45px] ">
                Vacation
              </Text>
            </View>
            <CustomButton title ="Explore" handlePress={() =>router.push('/home')}  />
          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar style="light" />
    </ImageBackground>
  );
}
