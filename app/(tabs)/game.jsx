import { View, Text, StyleSheet } from "react-native";

export default function Tab() {
  return (
    <View style={styles.container}>
      <Text className="text-red-500 text-4xl">Tab Game</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
