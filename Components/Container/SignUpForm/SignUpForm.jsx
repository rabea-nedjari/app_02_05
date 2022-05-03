//import liraries
import React, { Component, useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../UI/Button/Button";
import InputWithError from "../../UI/InputWithError/InputWithError";
import { FontAwesome5 } from "@expo/vector-icons";
import { UserContext } from "../../../Contexts/UserContext";

// create a component
const SignUpForm = () => {
  const userContext = useContext(UserContext);

  //1- Créer les variables d'états  pour mémoriser les entrées de l'utilisateur:
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");

  const [usernameInput, setUsernameInput] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  //2- Créer les fonctions qui s'executent quand on tape dans l'input:
  function handleEmail(t) {
    setEmailInput(t);
    setEmailError("");
  }

  function handleUsername(t) {
    setUsernameInput(t);
    setUsernameError("");
  }

  function handlePassword(t) {
    setPasswordInput(t);
    setPasswordError("");
  }

  function handleConfirmPassword(t) {
    setConfirmPasswordInput(t);
    setConfirmPasswordError("");
  }

  //3- Créer la fonction pour valider le formulaire:
  function signup() {
    if (
      emailInput.includes("@") &&
      usernameInput.length >= 3 &&
      usernameInput.length <= 12 &&
      passwordInput.length >= 6 &&
      confirmPasswordInput === passwordInput
    ) {
      userContext.setUser({ email: emailInput, username: usernameInput });
    } else {
      setEmailError(!emailInput.includes("@") ? "Email invalide!" : "");

      setUsernameError(
        usernameInput.length < 3
          ? "Username trop court!"
          : usernameInput.length > 12
          ? "Username trop long!"
          : ""
      );
      setPasswordError(
        passwordInput.length < 6 ? "Mot de passe trop court!" : ""
      );
      setConfirmPasswordError(
        confirmPasswordInput !== passwordInput
          ? "Les mot de passe ne sont pas identiques"
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
        action={handleEmail}
        errorMessage={emailError}
        type='email-address'
      />

      <InputWithError
        holder='Username'
        valeur={usernameInput}
        action={handleUsername}
        errorMessage={usernameError}
        type='email-address'
      />

      <InputWithError
        holder='Mot de passe'
        valeur={passwordInput}
        action={handlePassword}
        errorMessage={passwordError}
        type='default'
        isPassword
      />

      <InputWithError
        holder='Confirmez votre mot de passe'
        valeur={confirmPasswordInput}
        action={handleConfirmPassword}
        errorMessage={confirmPasswordError}
        type='default'
        isPassword
      />
      <Button action={signup}>
        <FontAwesome5 name='sign-in-alt' size={20} color='whitesmoke' />
        <Text
          style={{
            color: "whitesmoke",
            marginHorizontal: 5,
            fontSize: 20,
          }}
        >
          Valider
        </Text>
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
  },
});

//make this component available to the app
export default SignUpForm;
