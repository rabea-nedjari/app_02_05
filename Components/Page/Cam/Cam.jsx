//import liraries
import { Camera } from "expo-camera";
import React, { Component, useEffect, useState } from "react";
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
// create a component
const Cam = () => {
  const size = useWindowDimensions();
  const [cameraPermission, setCameraPermission] = useState(null);

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
        ratio='16:9'
        style={{ width: size.width, height: (size.width * 16) / 9 }}
      >
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <MaterialIcons
              name='camera'
              size={64}
              color={styleVariables.danger}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons
              name='flip-camera-ios'
              size={64}
              color={styleVariables.success}
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
