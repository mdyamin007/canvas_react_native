import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import Entypo from "@expo/vector-icons/Entypo";
import MatchCard from "../../components/MatchCard";

export default function Tab() {
  return (
    <ScrollView style={styles.container}>
      {/* Settings and Date Picker */}
      <View className="mx-6 my-4 flex-row items-center gap-x-4 bg-[#fcfafa]">
        <View>
          <Fontisto name="equalizer" size={22} color="#145E94" />
        </View>
        <View className="bg-white rounded-full px-4 py-2 shadow-white shadow-md flex-row items-center gap-x-2">
          <Text>Date | hour...</Text>
          <Entypo name="chevron-down" size={24} color="black" />
        </View>
      </View>
      <View className="h-[1px] bg-gray-200 w-full" />

      {/* Game Category */}
      <View className="flex flex-row">
        <TouchableOpacity className="bg-white border border-[#145E94] rounded-full px-4 py-2 flex-row items-center mx-6 my-4">
          <Text>Double games</Text>
        </TouchableOpacity>
      </View>

      {/* Game List */}
      <View className="mx-4">
        <MatchCard />
        <MatchCard />
        <MatchCard />
        <MatchCard />
        <MatchCard />
        <MatchCard />
      </View>

      <View className="h-24"></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcfafa",
  },
});
