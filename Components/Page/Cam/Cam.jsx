//import liraries
import { Camera } from "expo-camera";
import React, {
  Component,
  useEffect,
  useState,
  useRef,
  useContext,
} from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { styleVariables } from "../../../variables/StyleVariables";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { UserContext } from "../../../Contexts/UserContext";
// create a component
const Cam = (props) => {
  const size = useWindowDimensions();
  const [cameraPermission, setCameraPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const camRef = useRef();

  const { user, setUser } = useContext(UserContext);

  //Créer une fonction qui fait passer la variable cameraType de front a back ou de back a front:
  function toggleCameraType() {
    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  }

  async function takePicture() {
    let photo = await camRef.current.takePictureAsync();
    console.log("photo", photo);
    //Utiliser le contexte pour modifier l'avatar de user avec la photo.
    if (photo) {
      setUser({ ...user, avatar: photo });
      //Utiliser la navigation pour revenir sur la page de profil.
      props.navigation.goBack();
    }
  }

  useEffect(() => {
    (async () => {
      const permission = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(permission.granted);
    })();
  }, []);

  if (cameraPermission === null) {
    return (
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator color={styleVariables.success} size='large' />
      </View>
    );
  }

  if (!cameraPermission) {
    return (
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text> Permission refusée </Text>
        <MaterialCommunityIcons
          name='camera-off'
          size={64}
          color={styleVariables.danger}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={camRef}
        type={cameraType}
        ratio='16:9'
        style={{ width: size.width, height: (size.width * 16) / 9 }}
      >
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={toggleCameraType}>
            <MaterialIcons
              name='flip-camera-ios'
              size={64}
              color={styleVariables.success}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={takePicture}>
            <MaterialIcons
              name='camera'
              size={64}
              color={styleVariables.danger}
            />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 64,
  },
});

//make this component available to the app
export default Cam;
