import BottomAddButton from "@components/BottomAddButton";
import CancelAndSaveButton from "@components/CancelAndSaveButton";
import { Header } from "@components/Header";
import { PopUpAddButton } from "@components/PopUpAddButton";
import {
    ButtonContainer,
    ModalContainer,
    View
} from "@screens/ConsultationsHeld/styles";
import React, { useState } from "react";
import ListInteractableItem from "src/app/components/ListInteractableItem";

export default function ConsultationsHeld({ navigation }: any) {
    const [showConsultationsData, setShowConsultationsData] = useState(false);

    return (
        <>
            <Header text="Consultas Realizadas" isBackPress />
            <View>
                <ListInteractableItem
                    text="Clínico Geral"
                    isButton
                    modalFunction={() => setShowConsultationsData(true)}
                />
                <ListInteractableItem text="Ginecologista" isButton />
                <ButtonContainer>
                    <PopUpAddButton
                        onOpen={() => setShowConsultationsData(true)}
                    />
                </ButtonContainer>
            </View>

            {showConsultationsData ? (
                <ModalContainer>
                    <Header
                        text="Consultas Realizadas"
                        isModal
                        onModalClose={() => setShowConsultationsData(false)}
                    />
                    <View>
                        <ListInteractableItem
                            text="Próxima consulta"
                            text2="17/08/2023"
                            isButton
                        />
                        <ListInteractableItem text="17/02/2023" isButton />
                        <ListInteractableItem text="25/05/2022" isButton />
                        <ListInteractableItem text="04/01/2022" isButton />
                        <ListInteractableItem text="30/09/2020" isButton />
                    </View>
                    <CancelAndSaveButton
                        onPress={() => setShowConsultationsData(false)}
                    />
                </ModalContainer>
            ) : (
                <></>
            )}
        </>
    );
}
