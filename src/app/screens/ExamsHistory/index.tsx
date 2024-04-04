import CancelAndSaveButton from "@components/CancelAndSaveButton";
import { Header } from "@components/Header";
import { PopUpAddButton } from "@components/PopUpAddButton";
import { Table } from "@components/Table";
import {
    View,
    ButtonContainer,
    ModalContainer
} from "@screens/ExamsHistory/styles";
import React, { useState } from "react";
import Collapsible from "react-native-collapsible";
import ListInteractableItem from "src/app/components/ListInteractableItem";

export default function ExamsHistory() {
    const [showExamsDetected, setShowExamsDetected] = useState(false);
    const [showExamsData, setShowExamsData] = useState(false);

    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapsible = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <>
            <Header text="Histórico de Exames" isBackPress />
            <View>
                <ListInteractableItem text="Hemograma" isButton />
                <ListInteractableItem text="Colesterol Total" isButton />
                <ListInteractableItem
                    text="Glicose"
                    isButton
                    modalFunction={() => setShowExamsData(true)}
                />
                <ListInteractableItem text="TGO" isButton />
                <ListInteractableItem text="TGP" isButton />
            </View>
            <ButtonContainer>
                <PopUpAddButton onOpen={() => setShowExamsDetected(true)} />
            </ButtonContainer>

            {showExamsDetected ? (
                <ModalContainer>
                    <Header
                        text="Exames Detectados"
                        isModal
                        onModalClose={() => setShowExamsDetected(false)}
                    />
                    <View>
                        <ListInteractableItem text="Hemograma" isButton />
                        <ListInteractableItem
                            text="Colesterol Total"
                            isButton
                        />
                        <ListInteractableItem
                            text="Glicose"
                            isButton
                            modalFunction={() => setShowExamsData(true)}
                        />
                        <ListInteractableItem text="TGO" isButton />
                        <ListInteractableItem text="TGP" isButton />
                    </View>
                    <CancelAndSaveButton
                        onPress={() => setShowExamsDetected(false)}
                    />
                </ModalContainer>
            ) : (
                <></>
            )}

            {showExamsData ? (
                // Usar ListItem.Accordion para exibir os dados do exame
                <ModalContainer>
                    <Header
                        text="Exames Realizados"
                        isModal
                        onModalClose={() => setShowExamsData(false)}
                    />
                    <View>
                        <ListInteractableItem
                            text="Glicose"
                            downChevron
                            changeIcon={isCollapsed}
                            isButton
                            modalFunction={toggleCollapsible}
                        />

                        <Collapsible collapsed={isCollapsed} align="center">
                            <Table
                                rows={[
                                    {
                                        date: "17/02/2023",
                                        especialty: "79 mg/dl"
                                    }
                                ]}
                            />
                        </Collapsible>
                    </View>

                    <CancelAndSaveButton
                        onPress={() => setShowExamsData(false)}
                    />
                </ModalContainer>
            ) : (
                <></>
            )}
        </>
    );
}
