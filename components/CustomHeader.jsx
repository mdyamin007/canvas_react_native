import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const CustomHeader = (props) => {
  return (
    <>
      <SafeAreaView>
        <View>
          <Text>CustomHeader</Text>
        </View>
      </SafeAreaView>
      <StatusBar backgroundColor="black" style="light" />
    </>
  );
};

export default CustomHeader;
