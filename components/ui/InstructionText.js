import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

export default function InstructionText({ children, style }) {
  return <Text style={[styles.instruction, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instruction: {
    fontSize: 24,
    textAlign: "center",
    color: Colors.accent500,
    fontFamily: "open-sans",
  },
});
