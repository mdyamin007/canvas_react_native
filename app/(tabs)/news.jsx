import { View, Text, Image, FlatList, ScrollView } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import MatchCard from "../../components/MatchCard";
import SystemMessageCard from "../../components/SystemMessageCard";

const posts = [
  {
    id: "1",
    title:
      "Lorem Ipsum is a term for such a completely meaningless text - sometimes read",
    comments: 26,
    time: "an hour ago",
    type: "News",
  },
  {
    id: "2",
    title:
      "Lorem Ipsum is a term for such a completely meaningless text - sometimes read",
    comments: 26,
    time: "an hour ago",
    type: "News",
  },
];

export default function News() {
  return (
    <ScrollView className="flex-1 bg-[#F7F7F7] p-6">
      {/* Featured Post */}
      <View className="bg-gray-100 shadow-lg w-full">
        <View className="relative">
          {/* Image */}
          <Image
            source={require("../../assets/banner.jpeg")}
            className="w-full h-48 rounded-2xl"
            resizeMode="cover"
          />
          {/* Text Overlay */}
          <View className="absolute bottom-0 flex p-4">
            <Text className="text-lg font-semibold text-white">
              Lorem Ipsum is a nickname for such a completely meaningless text -
              some
            </Text>
            <View className="flex-row items-center justify-start gap-x-2">
              <Text className="text-sm text-white">Lorem Ipsum is</Text>
              <Text className="text-sm text-white"> • </Text>
              <Text className="text-sm text-white">4 minutes of reading</Text>
              <Feather name="clock" size={10} color="#fff" />
            </View>
          </View>
        </View>
      </View>

      <View className="h-[1px] bg-gray-200 w-full my-4" />

      {/* List of Posts */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="flex-row items-center mb-4 mt-2">
            <View className="flex-1">
              <Text className="text-sm font-bold text-[#145E94]">
                {item.type}
              </Text>
              <Text className="text-base font-semibold mt-1">{item.title}</Text>
              <View className="flex-row items-center jusify-start gap-x-2">
                <View className="flex-row justify-center gap-x-1 items-center">
                  <Feather name="clock" size={16} color="#145E94" />
                  <Text className="text-md text-gray-500 mt-1">
                    {item.time}
                  </Text>
                </View>
                <View className="flex-row justify-center gap-x-1 items-center">
                  <Feather name="message-circle" size={16} color="#145E94" />
                  <Text className="text-md text-gray-500 mt-1">
                    {item.comments} comments
                  </Text>
                </View>
              </View>
            </View>
            <Image
              source={require("../../assets/news.jpeg")}
              className="w-16 h-16 rounded-lg mr-4"
              resizeMode="cover"
            />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />

      <View className="h-[1px] bg-gray-200 w-full my-4" />

      <MatchCard />

      <SystemMessageCard />

      <View className="h-32"></View>
    </ScrollView>
  );
}
