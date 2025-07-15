import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

export default function GuessLogItem({ guessIdx, guessNum }) {
  return (
    <View style={styles.listItemContainer}>
      <Text style={styles.text}>#{guessIdx}</Text>
      <Text style={styles.text}>Opponent's Guess: {guessNum}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {
    borderWidth: 1,
    borderColor: Colors.primary800,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    flexDirection: "row",
    width: "100%",
    backgroundColor: Colors.accent500,
    elevation: 4,
    justifyContent: "space-between",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  text: {
    fontFamily: "open-sans",
    fontSize: 18,
    fontWeight: "700",
  },
});
