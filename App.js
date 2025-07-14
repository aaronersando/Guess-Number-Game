import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import GameStartScreen from "./screens/GameStartScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function handlePickedNumber(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <GameStartScreen onPickedNumber={handlePickedNumber} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

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
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
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
