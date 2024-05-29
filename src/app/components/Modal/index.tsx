import { AuthContext } from "@context/auth_context";
import { useNavigation } from "@react-navigation/native";
import Login from "@screens/Login";
import { StatusBar } from "expo-status-bar";
import { Stack, useToast } from "native-base";
import { useContext, useState } from "react";
import { Modal } from "react-native";

import {
    TextTitle,
    ViewContainer,
    ViewContent,
    ViewCard,
    ButtonConfirm,
    Button,
    ButtonAdd,
    ButtonTextWhite,
    ButtonTextBlack
} from "./styles";

export default function Profile() {
    const [openModal, setOpenModal] = useState(false);
    const { deleteUser } = useContext(AuthContext);
    const navigation = useNavigation();
    const toast = useToast();
    function handleDelete() {
        const response = deleteUser();
        navigation.navigate("Login");
        response.then((json) => {
            console.log(json);
            toast.show({
                title: "Conta excluída com sucesso.",
                description: "",
                backgroundColor: "red.500",
                placement: "top"
            });
        });
    }

    return (
        <ViewContainer>
            <StatusBar />
            <Modal
                visible={openModal}
                statusBarTranslucent
                transparent
                animationType="slide"
            >
                <ViewContent>
                    <ViewCard>
                        <TextTitle>
                            Você tem certeza que deseja deletar sua conta?
                        </TextTitle>
                        <Stack direction="row">
                            <Button onPress={() => setOpenModal(false)}>
                                <ButtonTextBlack>Cancelar</ButtonTextBlack>
                            </Button>
                            <ButtonConfirm onPress={handleDelete}>
                                <ButtonTextWhite>Confirmar</ButtonTextWhite>
                            </ButtonConfirm>
                        </Stack>
                    </ViewCard>
                </ViewContent>
            </Modal>
            <ButtonAdd onPress={() => setOpenModal(true)}>
                <ButtonTextWhite>Deletar conta</ButtonTextWhite>
            </ButtonAdd>
        </ViewContainer>
    );
}
