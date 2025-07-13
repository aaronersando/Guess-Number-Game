import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import GameStartScreen from "./screens/GameStartScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      colors={["#1a0101ff", "#570101ff"]}
      style={styles.rootScreen}
    >
      <ImageBackground
        style={styles.rootScreen}
        imageStyle={styles.image}
        source={require("./assets/images/dice_game.jpg")}
        resizeMode="cover"
      >
        <GameStartScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  image: {
    opacity: 0.5,
  },
});
