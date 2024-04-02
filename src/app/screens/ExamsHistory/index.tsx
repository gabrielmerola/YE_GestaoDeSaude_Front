import BottomAddButton from "@components/BottomAddButton";
import CancelAndSaveButton from "@components/CancelAndSaveButton";
import { Header } from "@components/Header";
import { PopUpAddButton } from "@components/PopUpAddButton";
import { ModalContainer } from "@screens/ConsultationsHeld/styles";
import { View, ButtonContainer } from "@screens/ExamsHistory/styles";
import React, { useState } from "react";
import ListInteractableItem from "src/app/components/ListInteractableItem";

export default function ExamsHistory({ navigation }: any) {
    const [showExamsDetected, setShowExamsDetected] = useState(false);
    const [showExamsData, setShowExamsData] = useState(false);

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
                        <ListInteractableItem text="Glicose" isButton />
                    </View>
                    {/*<View>*/}
                    {/*    <ListItem.Accordion*/}
                    {/*        content={*/}
                    {/*            <>*/}
                    {/*                <Icon name="place" size={30} />*/}
                    {/*                <ListItem.Content>*/}
                    {/*                    <ListItem.Title>List Accordion</ListItem.Title>*/}
                    {/*                </ListItem.Content>*/}
                    {/*            </>*/}
                    {/*        }*/}
                    {/*    >*/}
                    {/*    </ListItem.Accordion>*/}
                    {/*</View>*/}
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
