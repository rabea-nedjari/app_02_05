import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Auth from "./Components/Page/Auth/Auth";

export default function App() {
  return (
    <View style={styles.container}>
      <Auth />
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
  },
});
