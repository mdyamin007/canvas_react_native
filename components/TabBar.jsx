import { StyleSheet, View } from "react-native";
import { useLinkBuilder, useTheme } from "@react-navigation/native";
import { Text, PlatformPressable } from "@react-navigation/elements";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

function MyTabBar({ state, descriptors, navigation }) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  const icons = {
    register: (props) => (
      <Ionicons name="tennisball-outline" size={24} color="black" {...props} />
    ),
    game: (props) => (
      <AntDesign name="calendar" size={24} color="black" {...props} />
    ),
    rank: (props) => (
      <FontAwesome6 name="ranking-star" size={24} color="black" {...props} />
    ),
    news: (props) => (
      <FontAwesome name="newspaper-o" size={24} color="black" {...props} />
    ),
  };

  return (
    <View className="absolute bottom-0 flex-row justify-between items-center bg-black py-3">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.key}
            className="flex-1 justify-center items-center"
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {icons[route.name]({
              color: isFocused ? "#fff" : "gray",
            })}
            <Text style={{ color: isFocused ? "#fff" : "gray" }}>{label}</Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

export default MyTabBar;
