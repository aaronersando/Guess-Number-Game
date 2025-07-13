import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GameStartScreen from "./screens/GameStartScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      colors={["#1a0101ff", "#570101ff"]}
      style={styles.rootScreen}
    >
      <GameStartScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
