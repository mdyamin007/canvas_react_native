import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const GradientButton = ({
  onPress,
  title,
  colors = ["#34506D", "#3498DB"],
  start = { x: 1, y: 0 },
  end = { x: 0, y: 0 },
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="overflow-hidden rounded-br-lg"
    >
      <LinearGradient
        colors={colors}
        start={start}
        end={end}
        className="flex-1 px-12 py-4"
      >
        <Text className="text-white text-center font-bold text-base">
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;
