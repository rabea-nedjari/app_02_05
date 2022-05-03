//import liraries
import React, { Component, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { styleVariables } from "../../../variables/StyleVariables";
import { FontAwesome } from "@expo/vector-icons";
// create a component
const InputWithError = ({
  holder,
  valeur,
  action,
  errorMessage,
  type,
  isPassword,
}) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={holder}
          value={valeur}
          onChangeText={action}
          type={type}
          secureTextEntry={isPassword && !isPasswordShown}
        />

        {isPassword ? (
          <FontAwesome
            onPress={() => {
              setIsPasswordShown(!isPasswordShown);
            }}
            name='eye'
            size={24}
            color='black'
          />
        ) : null}
      </View>

      <Text style={styles.error}>{errorMessage}</Text>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  input: {
    padding: 5,
  },
  error: {
    color: "red",
    margin: 5,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: styleVariables.primaryColor,
    backgroundColor: "rgb(225,225,225)",
    padding: 5,
  },
});

//make this component available to the app
export default InputWithError;
