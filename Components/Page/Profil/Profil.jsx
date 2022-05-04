// rnfc : React Native Functional Component

import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { UserContext } from "../../../Contexts/UserContext";
import { styleVariables } from "../../../variables/StyleVariables";

const Profil = () => {
  const { user } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Email</Text>
        <Text style={styles.info}> {user.email} </Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Username</Text>
        <Text style={styles.info}> {user.username} </Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Description</Text>
        <Text style={styles.info}>
          {user.description
            ? user.description
            : "Veuillez entrer une description..."}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(220, 220, 220)",
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: styleVariables.primaryColor,
    padding: 20,
  },
  infoContainer: {
    borderBottomWidth: 2,
    borderColor: "gray",
    paddingBottom: 10,
  },
  info: {
    fontSize: 15,
  },
  infoLabel: {
    fontWeight: "bold",
  },
});

export default Profil;
