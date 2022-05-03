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
import { AntDesign } from "@expo/vector-icons";
import { styleVariables } from "../../../variables/StyleVariables";
import InputWithError from "../../UI/InputWithError/InputWithError";

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
      <InputWithError
        holder='Email'
        valeur={emailInput}
        action={handleEmailInput}
        errorMessage={emailError}
        type='email-address'
      />

      <InputWithError
        holder='Mot de passe'
        valeur={passwordInput}
        action={handlePasswordInput}
        errorMessage={passwordError}
        type='default'
        isPassword
      />

      <Button action={login}>
        <AntDesign name='login' size={20} color='whitesmoke' />
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
  labelButton: {
    color: "whitesmoke",
    fontSize: 18,
    marginHorizontal: 5,
  },
});

//make this component available to the app
export default LoginForm;
