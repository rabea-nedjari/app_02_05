import { StyleSheet, Text, View } from "react-native";
import Card from "../../HOC/Card/Card";

export default function Auth() {
  return (
    <View style={styles.container}>
      <Card title='Bienvenu!' content='Veuillez vous authentifier.'>
        <Text>Un composant en children</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
