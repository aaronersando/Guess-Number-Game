import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import GameStartScreen from "./screens/GameStartScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/Colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(true);

  function handlePickedNumber(pickedNumber) {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  }

  function handleGameOver() {
    setIsGameOver(true);
  }

  let screen = <GameStartScreen onPickedNumber={handlePickedNumber} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={handleGameOver} />;
  }

  if (isGameOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary800, Colors.primary600]}
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
