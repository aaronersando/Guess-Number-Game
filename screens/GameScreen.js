import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Title from "../components/Title";

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      {/* GUESS */}
      <Title>Opponet's Guess</Title>
      <View>
        <Text>Higher or Lower</Text>
        {/* + - */}
      </View>
      {/* <View>Log Rounds</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
