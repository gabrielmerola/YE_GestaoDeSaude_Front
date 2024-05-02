import { StatusBar } from "expo-status-bar";
import { Stack } from "native-base";
import { useState } from "react";
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

export default function Perfil() {
    const [openModal, setOpenModal] = useState(false);

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
                            <ButtonConfirm onPress={() => setOpenModal(false)}>
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
