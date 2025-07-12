import { View, Text } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

export default function GameStartScreen() {
  return (
    <View>
      <Text>GameStartScreen</Text>
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}
