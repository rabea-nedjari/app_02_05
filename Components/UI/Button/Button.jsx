//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// create a component
const Button = ({ action, children }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={action}>
      {children}
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2c3e50",
    padding: 10,
    borderRadius: 5,
  },
});

//make this component available to the app
export default Button;
