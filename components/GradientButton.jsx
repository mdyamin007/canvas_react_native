import { Text, TouchableOpacity } from "react-native";
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
      className="rounded-bl-lg"
      style={{ zIndex: 1 }}
    >
      <LinearGradient
        colors={colors}
        start={start}
        end={end}
        className="px-12 py-4"
      >
        <Text className="text-white text-center font-bold text-base">
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;
