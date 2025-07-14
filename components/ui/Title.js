import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    padding: 12,
    color: "white",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: "white",
  },
});
