import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../components/ui/Title";
import NumberContent from "../components/game/NumberContent";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  const num = Math.floor(Math.random() * (max - min)) + min;

  if (num === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return num;
  }
}

let minBound = 1;
let maxBound = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessNumbers, setGuessNumbers] = useState([]);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessNumbers.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    (minBound = 1), (maxBound = 100);
  }, []);

  const handleNextGuess = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't Lie", "You know that it's wrong!", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBound = currentGuess;
    } else {
      minBound = currentGuess + 1;
    }

    const newNum = generateRandomBetween(minBound, maxBound, currentGuess);
    setCurrentGuess(newNum);
    setGuessNumbers((prevNumbers) => [newNum, ...prevNumbers]);
  };

  const guessNumsLength = guessNumbers.length;

  let content = (
    <>
      <NumberContent>{currentGuess}</NumberContent>
      <Card>
        <InstructionText>Higher or Lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleNextGuess.bind(this, "greater")}>
              <Ionicons name="add" size={18} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleNextGuess.bind(this, "lower")}>
              <Ionicons name="remove" size={18} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 450) {
    content = (
      <>
        <View style={styles.wideButtonContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleNextGuess.bind(this, "greater")}>
              <Ionicons name="add" size={18} />
            </PrimaryButton>
          </View>
          <NumberContent>{currentGuess}</NumberContent>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleNextGuess.bind(this, "lower")}>
              <Ionicons name="remove" size={18} />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessNumbers}
          renderItem={(itemData) => (
            <GuessLogItem
              guessIdx={guessNumsLength - itemData.index}
              guessNum={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  wideButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  listContainer: {
    marginTop: 14,
    flex: 1,
    padding: 16,
  },
});
