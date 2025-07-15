import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({
  userNumber,
  onNewGameStart,
  guessRounds,
}) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>Game Over!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/Game_Over.jpg")}
          />
        </View>
        <Text style={styles.textSummary}>
          Your Phone Needed{" "}
          <Text style={styles.textHighlight}>{guessRounds}</Text> Turns to Guess
          Number
          <Text style={styles.textHighlight}> {userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onNewGameStart}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    overflow: "hidden",
    // height: deviceWidth < 380 ? 200 : 350,
    // width: deviceWidth < 380 ? 200 : 350,
    // borderRadius: deviceWidth < 380 ? 100 : 175,
    borderColor: Colors.primary800,
    borderWidth: 3,
    margin: 36,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  textSummary: {
    textAlign: "center",
    fontFamily: "open-sans",
    color: "white",
    fontSize: 26,
  },
  textHighlight: {
    color: Colors.accent500,
    fontFamily: "open-sans-bold",
    fontSize: 28,
  },
});
