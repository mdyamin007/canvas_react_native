import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const CustomHeader = (props) => {
  return (
    <>
      <SafeAreaView>
        <View className="bg-black p-4">
          <View className="flex-row items-center mx-4">
            <View className="mr-4">
              <Image
                source={require("../assets/avatar.jpeg")}
                className="w-10 h-10 rounded-full"
              />
            </View>
            <View>
              <Text className="text-white text-base">Noam Penn (Panther)</Text>
              <Text className="text-gray-400">a tennis player</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <StatusBar backgroundColor="black" style="light" />
    </>
  );
};

export default CustomHeader;
