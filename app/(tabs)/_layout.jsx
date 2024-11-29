import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import TabBar from "../../components/TabBar";
import CustomHeader from "../../components/CustomHeader";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: true,
        header: (props) => <CustomHeader {...props} />,
      }}
      initialRouteName="game"
    >
      <Tabs.Screen
        name="register"
        options={{
          title: "Register",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user-plus" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="game"
        options={{
          title: "Game board",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="calendar-o" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="rank"
        options={{
          title: "Rank",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="trophy" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: "News",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="newspaper-o" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
