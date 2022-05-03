//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { styleVariables } from "../../../variables/StyleVariables";

// create a component
const Button = ({ action, children, success, danger }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: success
            ? styleVariables.success
            : danger
            ? styleVariables.danger
            : styleVariables.primaryColor,
        },
      ]}
      onPress={action}
    >
      {children}
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
  },
});

//make this component available to the app
export default Button;
