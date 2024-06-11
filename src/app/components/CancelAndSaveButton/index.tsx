import {
    ButtonConfirm,
    ButtonTextBlack,
    ButtonTextWhite,
    TextTitle,
    ViewCard,
    ViewContainer,
    ViewContent
} from "@components/Modal/styles";
import { MedicineContext } from "@context/medicine_context";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Stack } from "native-base";
import React, { useContext, useState } from "react";
import { Modal } from "react-native";

import { Button, ButtonModal, ButtonText, Container } from "./styles";

interface CancelAndSaveButtonProps {
    medicineData?: any;
    onPress: () => void;
    isDelete?: boolean;
    idMedicine?: number;
}

const CancelAndSaveButton = ({
    onPress,
    medicineData,
    isDelete,
    idMedicine
}: CancelAndSaveButtonProps) => {
    const [openModal, setOpenModal] = useState(false);
    const { createMedicine, deleteMedicineByID } = useContext(MedicineContext);
    const navigation = useNavigation();

    const handleSave = async () => {
        try {
            navigation.goBack();
            return await createMedicine(medicineData);
        } catch (error) {
            console.log("Error creating medication: ", error);
        }
    };

    const deleteMedicine = async (id: number | undefined) => {
        if (id === undefined) {
            console.log("Invalid ID for deletion.");
            return;
        }
        try {
            const response = await deleteMedicineByID(id);
            console.log("Medication deleted", response);
        } catch (error) {
            console.log("Error deleting medication: ", error);
        } finally {
            setOpenModal(false);
            navigation.goBack();
        }
    };

    return (
        <>
            {!isDelete && (
                <Container>
                    {/* <Button onPress={handleSave}>
                        <ButtonText>Cancelar</ButtonText>
                    </Button> */}
                    <Button onPress={handleSave}>
                        <ButtonText>Salvar</ButtonText>
                    </Button>
                </Container>
            )}
            {isDelete && (
                <Container
                    style={{
                        paddingTop: 0,
                        alignItems: "center",
                        height: "6.75%"
                    }}
                >
                    <Button onPress={onPress}>
                        <ButtonText>Cancelar</ButtonText>
                    </Button>
                    <Button
                        style={{
                            backgroundColor: "red",
                            height: "100%",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                        onPress={() => setOpenModal(true)}
                    >
                        <ButtonText>Deletar</ButtonText>
                    </Button>
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
                                        Você tem certeza que deseja deletar esse
                                        medicamento?
                                    </TextTitle>
                                    <Stack direction="row">
                                        <ButtonModal
                                            onPress={() => setOpenModal(false)}
                                        >
                                            <ButtonTextBlack>
                                                Cancelar
                                            </ButtonTextBlack>
                                        </ButtonModal>
                                        <ButtonConfirm
                                            onPress={() =>
                                                deleteMedicine(idMedicine)
                                            }
                                        >
                                            <ButtonTextWhite>
                                                Confirmar
                                            </ButtonTextWhite>
                                        </ButtonConfirm>
                                    </Stack>
                                </ViewCard>
                            </ViewContent>
                        </Modal>
                    </ViewContainer>
                </Container>
            )}
        </>
    );
};

export default CancelAndSaveButton;
