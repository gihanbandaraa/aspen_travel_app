import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import {useFonts} from "expo-font";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
   const [fontsLoaded ,error] =useFonts({
    "Hiatus" :require("../assets/fonts/Hiatus.ttf"),
    "CircularXX" :require("../assets/fonts/CircularXX.otf"),
    "Montserrat" :require("../assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat500" :require("../assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat700" :require("../assets/fonts/Montserrat-Bold.ttf"),
   });
   useEffect(()=>{
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
   },[fontsLoaded ,error])

   if(!fontsLoaded && !error) return null;
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;

