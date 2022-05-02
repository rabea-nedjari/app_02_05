import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginForm from "../../Container/LoginForm/LoginForm";
import SignUpForm from "../../Container/SignUpForm/SignUpForm";
import Card from "../../HOC/Card/Card";

export default function Auth() {
  //1- Créer la variable d'état:
  const [isLogin, setIsLogin] = useState(true);

  //2- Créer la fonction pour modifier la variable:
  function toggleIsLogin() {
    setIsLogin(!isLogin);
  }

  //3- Utiliser l'opérateur ternaire pour afficher conditionnelement les composant: LoginForm et SignUpForm

  return (
    <View style={styles.container}>
      <Card title='Bienvenu!' content='Veuillez vous authentifier.'>
        {isLogin ? <LoginForm /> : <SignUpForm />}
        <Text onPress={toggleIsLogin}>
          {isLogin
            ? "Pas encore membre? Inscrivez-vous!"
            : "Vous etes deja membre? Connectez-vous!"}
        </Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
