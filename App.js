import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Auth from "./Components/Page/Auth/Auth";
import Profil from "./Components/Page/Profil/Profil";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <View style={styles.container}>
      {user ? <Profil /> : <Auth />}
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(150, 150, 150)",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

//Exercice:
//1- Créer le composant: ./Components/Page/Profil/Profil.jsx
//2- Afficher le texte: 'Page de profil' dans ce composant.
//3- Afficher le composant dans App.js
