import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

export default function GameStartScreen({ onPickedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function handleEnteredNumber(enteredText) {
    setEnteredNumber(enteredText);
  }

  function handleConfirmInput() {
    const number = parseInt(enteredNumber);
    if (isNaN(number) || number <= 0 || number > 99) {
      Alert.alert(
        "Invalid Input",
        "Input should be a number between 1 and 99!",
        [{ text: "Okay", style: "destructive" }],
        handleResetInput
      );
      return;
    }
    onPickedNumber(number);
  }

  function handleResetInput() {
    setEnteredNumber("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize={false}
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={handleEnteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleResetInput}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleConfirmInput}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    padding: 16,
    marginHorizontal: 24,
    backgroundColor: "#3b0303c9",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: "bold",
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    marginVertical: 8,
    color: "#ddb52f",
    textAlign: "center",
    paddingTop: 0,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
