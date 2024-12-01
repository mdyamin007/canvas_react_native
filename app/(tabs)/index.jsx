import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import Entypo from "@expo/vector-icons/Entypo";
import MatchCard from "../../components/MatchCard";

const games = [
  {
    id: "1",
    link: "/chat/1",
  },
  {
    id: "2",
    link: "/chat/2",
  },
  {
    id: "3",
    link: "/chat/3",
  },
  {
    id: "4",
    link: "/chat/4",
  },
  {
    id: "5",
    link: "/chat/5",
  },
];

export default function GameScreen() {
  return (
    <View className="flex-1 bg-[#FCFAFA]">
      {/* Settings and Date Picker */}
      <View className="mx-6 my-4 flex-row items-center gap-x-4">
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
        <TouchableOpacity
          className="bg-white border border-[#145E94] rounded-full px-4 py-2 flex-row items-center mx-6 my-4"
          onPress={() => {
            console.log("category pressed");
          }}
        >
          <Text>Double games</Text>
        </TouchableOpacity>
      </View>

      {/* Game List */}
      <View className="mx-4 flex-1">
        <FlatList
          data={games}
          renderItem={({ item }) => <MatchCard link={item.link} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          ListFooterComponent={() => <View className="h-52"></View>}
        />
      </View>
    </View>
  );
}
