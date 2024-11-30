import React from "react";
import { View, Text, Image } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { SvgUri } from "react-native-svg";
import GradientButton from "./GradientButton";

const MatchCard = () => {
  return (
    <View className="bg-white rounded-lg shadow-lg my-4">
      <View className="p-4 relative">
        {/* Location and Court */}
        <Text className="text-[#145E94] font-bold">
          Yarkon Park, Tel Aviv | Court #2
        </Text>

        {/* Date, Time, Messages */}
        <View className="flex-row justify-start items-center mt-2 gap-x-3">
          <View className="flex-row justify-center items-center gap-x-1">
            <Feather name="calendar" size={16} color="#145E94" />
            <Text className="text-gray-500">02/24/2023</Text>
          </View>
          <View className="flex-row justify-center items-center gap-x-1">
            <Feather name="clock" size={16} color="#145E94" />
            <Text className="text-gray-500">14:00</Text>
          </View>
          <View className="flex-row justify-center items-center gap-x-1">
            <Feather name="message-circle" size={16} color="#145E94" />
            <Text className="text-gray-500">26 messages</Text>
          </View>
        </View>

        <View className="bg-white p-4">
          {/* Players Section */}
          <View className="flex-row items-center justify-between mb-4">
            {/* Left Side Players */}
            <View className="flex-row gap-2">
              <View className="items-center">
                <View className="relative border border-[#145E94] rounded-full p-1">
                  <Image
                    source={require("../assets/player1.png")}
                    className="w-15 h-15 rounded-full"
                  />
                  <SvgUri
                    uri="https://flagcdn.com/br.svg"
                    width={20}
                    height={20}
                    style={{ position: "absolute", bottom: 0, right: 0 }}
                  />
                </View>
                <Text className="text-sm font-medium mt-1">Mandler T.</Text>
                <Text className="text-xs text-gray-500">(PRO)</Text>
              </View>

              <View className="items-center">
                <View className="relative border border-[#145E94] rounded-full p-1">
                  <Image
                    source={require("../assets/player2.png")}
                    className="w-15 h-15 rounded-full"
                  />
                  <SvgUri
                    uri="https://flagcdn.com/br.svg"
                    width={20}
                    height={20}
                    style={{ position: "absolute", bottom: 0, right: 0 }}
                  />
                </View>
                <Text className="text-sm font-medium mt-1">Oz Y.</Text>
                <Text className="text-xs text-gray-500">(The Wiz)</Text>
              </View>
            </View>

            {/* VS Text */}
            <Text className="text-lg font-bold text-gray-600">VS.</Text>

            {/* Right Side Empty Players */}
            <View className="flex-row gap-2">
              {[1, 2].map((_, index) => (
                <View key={index} className="items-center">
                  <View className="w-16 h-16 rounded-full border-2 border-dashed border-blue-400 items-center justify-center">
                    <Text className="text-2xl text-blue-400">+</Text>
                  </View>
                  <Text className="text-sm text-gray-400 mt-1">player</Text>
                  <Text className="text-xs text-gray-400">(nickname)</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        <Feather
          name="share-2"
          size={22}
          color="#145E94"
          className="absolute top-3 right-3"
        />
      </View>

      <View className="flex-row justify-between">
        {/* Weather Info */}
        <View className="space-y-2 mb-4 ml-4">
          <View className="flex-row items-center">
            <Text className="text-gray-500">💧 25% Precipitation</Text>
          </View>
          <View className="flex-row items-center">
            <Text className="text-gray-500">☁️ Weather - cloudy</Text>
          </View>
        </View>

        {/* Chat Button */}
        <GradientButton title="Chat" colors={["#34506D", "#3498DB"]} />
      </View>
    </View>
  );
};

export default MatchCard;
