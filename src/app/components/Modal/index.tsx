import BottomAddButton from "@components/BottomAddButton";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Checkbox, Stack, Icon } from "native-base";
import { Children, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal } from "react-native";
import { styled } from "styled-components";

import {
    TextTitle,
    TextSubtitle,
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
                        <TextTitle>Adicionar um plano?</TextTitle>
                        <TextSubtitle>Selecione os planos:</TextSubtitle>
                        <Checkbox colorScheme="green" value="Sulamerica">
                            Sulamerica
                        </Checkbox>
                        <Checkbox colorScheme="green" value="Unimed">
                            Unimed
                        </Checkbox>
                        <Checkbox colorScheme="green" value="Bradesco">
                            Bradesco
                        </Checkbox>
                        <Checkbox colorScheme="green" value="Amil">
                            Amil
                        </Checkbox>
                        <Checkbox colorScheme="green" value="Biosaude">
                            Biosaúde
                        </Checkbox>
                        <Checkbox colorScheme="green" value="Biovida">
                            Biovida
                        </Checkbox>
                        <Checkbox colorScheme="green" value="Outros">
                            Outros
                        </Checkbox>
                        <Checkbox colorScheme="green" value="None">
                            Não tenho plano
                        </Checkbox>

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
                <Text>
                    <Icon as={Ionicons} name="add" size="lg" color="white" />
                </Text>
            </ButtonAdd>
        </ViewContainer>
    );
}

const styles = StyleSheet.create({
    text: {
        fontWeight: "600",
        fontSize: 16,
        color: "white"
    }
});
