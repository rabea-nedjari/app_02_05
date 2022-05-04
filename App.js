import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Auth from "./Components/Page/Auth/Auth";
import Profil from "./Components/Page/Profil/Profil";
import { UserContext } from "./Contexts/UserContext";
import { NavigationContainer } from "@react-navigation/native";
import ProfilStack from "./Components/Stack/ProfilStack";
export default function App() {
  const fakeUser = {
    email: "sam.djm93@gmail.com",
    username: "Samy Djemai",
  };
  const [user, setUser] = useState(fakeUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <View style={styles.container}>
        <NavigationContainer>
          {user ? <ProfilStack /> : <Auth />}
          <StatusBar style='auto' />
        </NavigationContainer>
      </View>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(250, 250, 250)",
  },
});

//Exercice:
//1- Créer le composant: ./Components/Page/Profil/Profil.jsx
//2- Afficher le texte: 'Page de profil' dans ce composant.
//3- Afficher le composant dans App.js
