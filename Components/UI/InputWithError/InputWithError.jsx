//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { styleVariables } from "../../../variables/StyleVariables";

// create a component
const InputWithError = ({
  holder,
  valeur,
  action,
  errorMessage,
  type,
  isPassword,
}) => {
  return (
    <>
      <TextInput
        style={styles.input}
        placeholder={holder}
        value={valeur}
        onChangeText={action}
        type={type}
        secureTextEntry={isPassword}
      />
      <Text style={styles.error}>{errorMessage}</Text>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    borderBottomColor: styleVariables.primaryColor,
    backgroundColor: "rgb(225,225,225)",
    padding: 5,
  },
  error: {
    color: "red",
    margin: 5,
  },
});

//make this component available to the app
export default InputWithError;
