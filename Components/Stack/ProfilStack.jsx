import { createStackNavigator } from "@react-navigation/stack";
import { styleVariables } from "../../variables/StyleVariables";
import Cam from "../Page/Cam/Cam";
import Profil from "../Page/Profil/Profil";

const Stack = createStackNavigator();

export default function ProfilStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: styleVariables.primaryColor,
        },
        headerTitleStyle: {
          color: "whitesmoke",
        },
        headerTintColor: "whitesmoke",
      }}
    >
      <Stack.Screen
        name='profil'
        component={Profil}
        options={{
          title: "Page de profil",
        }}
      />
      <Stack.Screen
        name='camera'
        component={Cam}
        options={{
          title: "Prendre une photo",
        }}
      />
    </Stack.Navigator>
  );
}
