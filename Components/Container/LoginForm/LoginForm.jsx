//import liraries
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Button from "../../UI/Button/Button";

// create a component
const LoginForm = () => {
  //1- Créer les variables d'états  pour mémoriser les entrées de l'utilisateur
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");

  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //2- Créer les fonctions qui s'executent quand on tape dans l'input:
  function handleEmailInput(text) {
    setEmailInput(text);
    setEmailError("");
  }

  function handlePasswordInput(text) {
    setPasswordInput(text);
    setPasswordError("");
  }

  //3- Créer la fonction pour valider le formulaire:
  function login() {
    if (emailInput.includes("@") && passwordInput.length >= 6) {
      alert("Connexion reussie");
    } else {
      setEmailError(!emailInput.includes("@") ? "Email invalide!" : "");
      setPasswordError(
        passwordInput.length < 6
          ? "Mot de passe trop court!(Min. 6 caractères)"
          : ""
      );
    }
  }

  //4- Mettre en place les composants, et les lier avec les fonctions et variables:
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Email'
        value={emailInput}
        onChangeText={handleEmailInput}
      />
      <Text style={styles.error}> {emailError} </Text>

      <TextInput
        style={styles.input}
        placeholder='Mot de passe'
        value={passwordInput}
        onChangeText={handlePasswordInput}
      />
      <Text style={styles.error}>{passwordError}</Text>

      <Button action={login}>
        <Text style={styles.labelButton}>Se connecter</Text>
      </Button>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#2c3e50",
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#2c3e50",
    backgroundColor: "rgb(225,225,225)",
    padding: 5,
  },
  error: {
    color: "red",
    margin: 5,
  },

  labelButton: {
    color: "whitesmoke",
    fontSize: 18,
  },
});

//make this component available to the app
export default LoginForm;
