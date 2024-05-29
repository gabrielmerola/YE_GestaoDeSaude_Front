import {
  StyleSheet,
  Pressable,
  View,
  Modal,
  ActivityIndicator,
  TouchableOpacity,
  Text
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const UploadModal = ({
  modalVisible,
  onBackPress,
  onCameraPress,
  onGalleryPress,
  onRemovePress,
  isLoading = false,
}) => {
  return (
    <Modal animationType="slide" visible={modalVisible} transparent={true}>
      <Pressable style={styles.container} onPress={onBackPress}>
        {isLoading && <ActivityIndicator size={70} color={"blue"} />}

        {!isLoading && (
          <View style={[styles.modalView, { backgroundColor: "#fff" }]}>
            <Text style={{ marginBottom: 5, fontSize:18 }}>
              Editar foto de perfil
            </Text>

            <View style={styles.decisionRow}>
              <TouchableOpacity
                style={styles.optionBtn}
                onPress={onCameraPress}
              >
                <MaterialCommunityIcons
                  name="camera-outline"
                  size={30}
                  color={"#739489"}
                />
                <Text small>Câmera</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.optionBtn}
                onPress={onGalleryPress}
              >
                <MaterialCommunityIcons
                  name="image-outline"
                  size={30}
                  color={"#739489"}
                />
                <Text small>Galeria</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.optionBtn}
                onPress={onRemovePress}
              >
                <MaterialCommunityIcons
                  name="trash-can-outline"
                  size={30}
                  color={"#739489"}
                />
                <Text>Deletar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalView: {
    borderRadius: 15,
    padding: 20,
    paddingBottom: 30,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: "100%",
  },
  decisionRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingTop: 15,
  },
  optionBtn: {
    backgroundColor: "#D9D9D9",
    borderRadius: 15,
    padding: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UploadModal;
