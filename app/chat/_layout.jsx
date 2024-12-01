import { Stack } from "expo-router";

const ChatLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="[id]" options={{ headerShown: false }} />
    </Stack>
  );
};

export default ChatLayout;
