import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: "#580201ff" }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#650606cd",
    elevation: 2,
  },
  buttonOuterContainer: {
    margin: 8,
    overflow: "hidden",
    borderRadius: 28,
  },
  pressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});
