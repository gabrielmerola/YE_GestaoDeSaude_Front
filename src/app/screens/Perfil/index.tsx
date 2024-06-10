import { MedicineFormData } from "@api/repositories/medicine_repository_http";
import { Header } from "@components/Header";
import Modal from "@components/Modal";
import { Title } from "@components/Title/Title";
import { AuthContext } from "@context/auth_context";
import { MedicineContext } from "@context/medicine_context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ButtonOut, ButtonTextWhiteOut } from "@screens/Perfil/styles";
import { VStack, Text, ScrollView, Divider } from "native-base";
import { useCallback, useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Avatar from "../Camera/Avatar";
import UploadModal from "../Camera/UploadModal";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";

// for uploading image to backend
// const FormData = global.FormData;

export default function Perfil({ navigation }: any) {
    const { getClient } = useContext(AuthContext);
    const [data, setData] = useState<any>({});
    const [med, setMedicines] = useState([]);
    const { getAllMedicines } = useContext(MedicineContext);
    const [modalVisible, setModalVisible] = useState(false);
    const [image, setImage] = useState();

    useEffect(() => {
        // get data from API
    });

    const uploadImage = async (mode: any) => {
        try {
            let result = {};

            if (mode === "gallery") {
                await ImagePicker.requestMediaLibraryPermissionsAsync();
                result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    allowsEditing: true,
                    aspect: [1, 1],
                    quality: 1
                });
            } else {
                await ImagePicker.requestCameraPermissionsAsync();
                result = await ImagePicker.launchCameraAsync({
                    cameraType: ImagePicker.CameraType.front,
                    allowsEditing: true,
                    aspect: [1, 1],
                    quality: 1
                });
            }
        } catch (error) {
            alert("Erro em atualizar a imagem" + error);
            setModalVisible(false);
        }
    };

    const removeImage = async () => {
        try {
            saveImage(null);
        } catch ({ message }: any) {
            alert(message);
            setModalVisible(false);
        }
    };

    const saveImage = async (image: any) => {
        try {
            // update displayed image
            setImage(image);

            // make api call to save
            // sendToBackend();

            setModalVisible(false);
        } catch (error) {
            throw error;
        }
    };

    //  const sendToBackend = async () => {
    //    try {
    //      const formData = new FormData();

    //      formData.append("image", {
    //        uri: image,
    //      type: "image/png",
    //       name: "profile-image",
    //      });

    //      const config = {
    //      headers: {
    //         "Content-Type": "multipart/form-data",
    //      },
    //        transformRequest: () => {
    //          return formData;
    //        },
    //      };

    //      await axios.post("https://your-api-endpoint", formData, config);

    //      alert("success");
    //    } catch (error) {
    //      throw error;
    //    }
    //  };

    async function getClientid() {
        const response = await getClient();
        setData(response);
    }

    async function getMedicineId() {
        const response = await getAllMedicines();
        if (response != undefined) {
            setMedicines(response);
        }
    }

    useEffect(() => {
        getMedicineId();
    }, []);

    useEffect(() => {
        getClientid();
    }, []);

    const logout = async () => {
        try {
            await AsyncStorage.removeItem("token");
            navigation.navigate("Login");
        } catch (error) {
            console.error("Erro ao sair da conta:", error);
        }
    };

    const fetchMedicines = async () => {
        try {
            const response = await getAllMedicines();
            if (response && Array.isArray(response)) {
                const parsedMedicines: any = response.map((med: any) => ({
                    id: med.id,
                    name: med.name
                }));
                console.log(parsedMedicines);
                setMedicines(parsedMedicines);
            }
        } catch (error: any) {
            return console.log(
                "Erro ao buscar medicamentos: " + error.response
            );
        }
    };

    useFocusEffect(
        useCallback(() => {
            fetchMedicines();
        }, [FormData])
    );

    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center">
                <Header text="Seu Perfil" isBackPress />
                <Avatar
                    onButtonPress={() => setModalVisible(true)}
                    uri={image}
                />

                <UploadModal
                    modalVisible={modalVisible}
                    onBackPress={() => {
                        setModalVisible(false);
                    }}
                    onCameraPress={() => uploadImage("")}
                    onGalleryPress={() => uploadImage("gallery")}
                    onRemovePress={() => removeImage()}
                />

                <Title mt={10}>Informações Pessoais</Title>
                <Text fontSize="lg" mt={5} mb={1}>
                    {data.name}
                </Text>
                <Text fontSize="lg" mb={1}>
                    {data.email}
                </Text>
                <Text fontSize="lg">
                    ({data.phone?.substring(0, data.phone.indexOf(8))}){" "}
                    {data.phone?.substring(2, data.phone.indexOf(3))}-
                    {data.phone?.substring(7)}
                </Text>

                <Divider mt={7} />

                <Title mt={7} mb={5}>
                    Medicamentos
                </Title>
                {med.map((item: any) => {
                    return <Text fontSize="md">{item.name}</Text>;
                })}
                <Divider mt={7} mb={7} />

                <Modal />

                <ButtonOut onPress={logout}>
                    <ButtonTextWhiteOut>Sair</ButtonTextWhiteOut>
                </ButtonOut>
            </VStack>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 25,
        paddingHorizontal: 25
    },
    section: {
        borderRadius: 15,
        overflow: "hidden",
        marginTop: 5,
        marginBottom: 5
    },
    text: {
        textAlign: "center"
    }
});

function setData(response: object | undefined) {
    throw new Error("Function not implemented.");
}
