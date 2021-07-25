import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { tailwind } from "./tailwind";

export default function App() {
  return (
    <View
      style={tailwind("flex-1 bg-gray-50 items-center justify-center m-10")}
    >
      <Text style={tailwind("text-center font-bold text-4xl text-red-600")}>
        Title
      </Text>
      <Text style={tailwind("text-center font-thin text-2xl my-10")}>
        Thin Text
      </Text>
      <View
        style={[
          tailwind("bg-red-100 h-10 items-center justify-center"),
          { width: 200 },
        ]}
      >
        <Text style={tailwind("text-black text-center")}>Hello</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
