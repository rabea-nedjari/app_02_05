// rnfc : React Native Functional Component

import { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { UserContext } from "../../../Contexts/UserContext";
import { styleVariables } from "../../../variables/StyleVariables";
import defaultAvatar from "../../../assets/default_avatar.png";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const Profil = () => {
  const { user, setUser } = useContext(UserContext);

  const size = useWindowDimensions();

  console.log(ImagePicker);

  const pickImage = async () => {
    let pickedImage = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!pickedImage.cancelled) {
      //Object spreading
      setUser({
        ...user,
        avatar: pickedImage,
      });
    }
  };

  return (
    <View>
      <View>
        <Image
          style={{
            width: size.width,
            height: size.width,
            maxWidth: 300,
            maxHeight: 300,
          }}
          source={user.avatar ? user.avatar : defaultAvatar}
        />

        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={pickImage}>
            <MaterialIcons
              name='photo-library'
              size={40}
              color={styleVariables.primaryColor}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons
              name='photo-camera'
              size={40}
              color={styleVariables.primaryColor}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Email</Text>
          <Text style={styles.info}>{user.email}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Username</Text>
          <Text style={styles.info}>{user.username}</Text>
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
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
});

export default Profil;
