import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For icons

export default function SystemMessageCard() {
  return (
    <View className=" rounded-lg bg-white p-4 shadow-sm w-full my-2">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-[#145E94] text-sm font-medium">
          System message
        </Text>
        <Ionicons name="share-social-outline" size={16} color="#145E94" />
      </View>

      {/* Message */}
      <Text className="text-base text-gray-800 mb-3">
        Lorem Ipsum is a term for a completely common meaningless text -
        sometimes also called Lorem Ipsum!
      </Text>

      {/* Footer */}
      <View className="flex-row items-center">
        <Ionicons name="time-outline" size={14} color="#145E94" />
        <Text className="text-sm text-gray-500 ml-1">an hour ago</Text>
      </View>
    </View>
  );
}
