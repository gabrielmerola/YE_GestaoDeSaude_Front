import { StyleSheet, TouchableOpacity, Image, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import profile from "./profile.jpg"

const Avatar = ({
  uri = "",
  style = {},
  imgStyle = {},
  onButtonPress = {},
  aviOnly = false,
  ...props
}) => {
  return (
    <View
      style={[styles.container, { marginBottom: aviOnly ? 0 : 15 }, style]}
      {...props}
    >
      <TouchableOpacity onPress={onButtonPress}>
        <Image
          source={uri ? { uri } : profile}
          style={[
            styles.image,
            aviOnly && { height: 35, width: 35, borderWidth: 0 },
            imgStyle,
          ]}
        />

        {!aviOnly && (
          <TouchableOpacity style={styles.editButton} onPress={onButtonPress}>
            <MaterialCommunityIcons
              name="camera-outline"
              size={30}
              color="#739489"
            />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    position: "relative",
    margin: 30,
  },
  image: {
    borderRadius: 75,
    width: 150,
    height: 150,
    borderColor: "#739489",
    borderWidth: 5,
  },
  editButton: {
    backgroundColor: "#D9D9D9",
    borderRadius: 24,
    padding: 8,
    position: "absolute",
    right: 5,
    bottom: 5,
  },
});

export default Avatar;
