//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// HOC: High Order Component / Composant d'ordre superieure

const Card = ({ title, content, children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {title} </Text>
      <Text style={styles.content}> {content} </Text>
      <View style={styles.childrenContainer}>{children}</View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
    marginHorizontal: 20,
    borderRadius: 5,
    paddingTop: 20,
  },
  title: {
    color: "whitesmoke",
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    color: "whitesmoke",
    fontSize: 16,
    marginBottom: 20,
  },
  childrenContainer: {
    backgroundColor: "whitesmoke",
    width: "100%",
    padding: 10,
  },
});

//make this component available to the app
export default Card;
