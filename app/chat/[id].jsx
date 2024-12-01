import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import { LinearGradient } from "expo-linear-gradient";

// Sample data for messages
const messages = [
  {
    id: "1",
    text: "Hey guys, thanks a lot for the impressive game, it was fun!",
    sender: "Penn N. (panther)",
    timestamp: "20:00",
    isSentByMe: false,
  },
  {
    id: "2",
    text: "Certainly, it was fantastic to see how long each point lasted. It's always fun to play with players",
    sender: "Penn N. (panther)",
    timestamp: "20:00",
    isSentByMe: false,
  },
  {
    id: "3",
    text: "The dedication of the ball was stunning.",
    sender: "Penn N. (panther)",
    timestamp: "20:00",
    isSentByMe: false,
  },
  {
    id: "4",
    text: "The dedication of the ball was stunning.",
    sender: "Penn N. (panther)",
    timestamp: "20:00",
    isSentByMe: false,
  },
  {
    id: "5",
    text: "I'm crossing my fingers that the next game will be crazy!",
    sender: "Penn N. (panther)",
    timestamp: "20:00",
    isSentByMe: true,
  },
];

const participants = [
  { id: "1", avatar: require("../../assets/player2.png") },
  { id: "2", avatar: require("../../assets/player2.png") },
  { id: "3", avatar: require("../../assets/player2.png") },
  { id: "4", avatar: require("../../assets/player2.png") },
];

export default function ChatScreen() {
  const renderMessage = ({ item }) => (
    <View
      className={`flex-row mb-4 ${
        item.isSentByMe ? "justify-end" : "justify-start"
      }`}
    >
      {!item.isSentByMe && (
        <Image
          source={require("../../assets/player2.png")}
          className="w-8 h-8 rounded-full mr-2"
        />
      )}
      {item.isSentByMe ? (
        <LinearGradient
          colors={["#34506D", "#3498DB"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          className="max-w-[80%] rounded-2xl overflow-hidden p-3 shadow-sm"
        >
          <Text className="text-white text-base font-semibold mb-1">
            {item.sender}
          </Text>
          <Text className="text-white text-base">{item.text}</Text>
          <Text className="text-white/80 text-xs text-right mt-1">
            {item.timestamp}
          </Text>
        </LinearGradient>
      ) : (
        <View className="max-w-[80%] bg-white rounded-2xl p-3 shadow-sm">
          <Text className="text-black text-base font-semibold mb-1">
            {item.sender}
          </Text>
          <Text className="text-gray-800 text-base">{item.text}</Text>
          <Text className="text-gray-500 text-xs text-right mt-1">
            {item.timestamp}
          </Text>
        </View>
      )}
      {item.isSentByMe && (
        <Image
          source={require("../../assets/player1.png")}
          className="w-8 h-8 rounded-full ml-2"
        />
      )}
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-[#FCFAFA]">
      {/* Header */}
      <View className="p-4 bg-white shadow-sm">
        <View className="flex-row items-center justify-between mb-3">
          <Text className="text-[#145E94] text-lg font-semibold">
            Monday, February 23 | 14:00 - Tel Aviv
          </Text>
          <TouchableOpacity>
            <Entypo name="chevron-right" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center justify-between">
          <TouchableOpacity>
            <Feather name="share-2" size={22} color="black" />
          </TouchableOpacity>
          <View className="flex-row gap-x-2">
            {participants.map((participant) => (
              <View className="relative">
                <Image
                  key={participant.id}
                  source={participant.avatar}
                  className="w-10 h-10 rounded-full"
                />
                <View className="h-3 w-3 rounded-full bg-green-500 absolute bottom-0 right-0"></View>
              </View>
            ))}
          </View>
          <View></View>
        </View>
      </View>

      {/* Chat Messages */}
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        inverted={false}
        showsVerticalScrollIndicator={false}
      />

      {/* Input Area */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="border-t border-gray-200 bg-white"
      >
        <View className="flex-row items-center p-2">
          <TouchableOpacity className="p-3 rounded-full bg-white items-center justify-center">
            <AntDesign name="plus" size={24} color="black" />
          </TouchableOpacity>
          <TextInput
            placeholder="Add a comment..."
            className="flex-1 bg-gray-100 rounded-full px-4 py-2 mr-2"
            multiline
          />
          <TouchableOpacity className="p-3 rounded-full bg-[#145E94] items-center justify-center">
            <Ionicons name="send-outline" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
