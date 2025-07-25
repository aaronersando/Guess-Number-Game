import { View, Text, StyleSheet, Platform } from "react-native";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    padding: 12,
    color: "white",
    textAlign: "center",
    fontSize: 24,
    fontFamily: "open-sans-bold",
    // borderWidth: 2,
    // borderWidth: Platform.OS == 'android' ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: "white",
    maxWidth: "80%",
    width: 300,
  },
});
