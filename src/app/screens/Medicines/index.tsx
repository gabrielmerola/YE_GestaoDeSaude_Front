import CancelAndSaveButton from "@components/CancelAndSaveButton";
import { Header } from "@components/Header";
import { PopUpAddButton } from "@components/PopUpAddButton";
import {
    ButtonContainer,
    ModalContainer,
    View
} from "@screens/Medicines/styles";
import React, { useState } from "react";
import ListInteractableItem from "src/app/components/ListInteractableItem";

const json = [
    {
        name: "Losartana",
        hour: "08:00",
        period: "7",
        hour_interval: "8",
        quantity: "1"
    }
];
//         <ListInteractableItem
//             text="Horário"
//             text2="09:00"
//         />
//         <ListInteractableItem
//             text="Período"
//             text2="7 dias"
//         />
//         <ListInteractableItem
//             text="Intervalo"
//             text2="8hs"
//         />
//         <ListInteractableItem
//             text="Quantidade"
//             text2="1"
//         />
//     </View>

export default function Medicines() {
    const [showNewMedicines, setShowNewMedicines] = useState(false);
    const [showMedicineData, setShowMedicineData] = useState(false);

    const [json, setJson] = useState([]);

    return (
        <>
            <Header text="Medicamentos" isBackPress />
            {/*Esses botões devem ser criados com os valores do banco, use o componente Table como referência*/}
            <View>
                <ListInteractableItem
                    text="Losartana"
                    text2="08:00"
                    isButton
                    modalFunction={() => setShowMedicineData(true)}
                />
                <ListInteractableItem
                    text="Hidrocolorotiazida"
                    text2="08:00"
                    isButton
                />
                <ListInteractableItem
                    text="Pantoprazol"
                    text2="12:00"
                    isButton
                />
            </View>
            <ButtonContainer>
                <PopUpAddButton onOpen={() => setShowNewMedicines(true)} />
            </ButtonContainer>

            {showNewMedicines ? (
                <ModalContainer>
                    <Header
                        text="Novo Medicamento"
                        isModal
                        onModalClose={() => setShowNewMedicines(false)}
                    />
                    <View>
                        <ListInteractableItem
                            text="Nome: "
                            isButton={false}
                            inputType="TEXT"
                            inputTxt="Digite o nome do medicamento..."
                            sizeType="LARGE"
                        />
                        <ListInteractableItem
                            text="Horário:"
                            isButton={false}
                            inputType="TIME"
                            inputTxt="00:00"
                        />
                        <ListInteractableItem
                            text="Período:"
                            isButton={false}
                            inputType="NUMBER"
                            inputTxt="... dias"
                        />
                        <ListInteractableItem
                            text="Intervalo:"
                            isButton={false}
                            inputType="TIME"
                            inputTxt="... horas"
                        />
                        <ListInteractableItem
                            text="Quantidade:"
                            isButton={false}
                            inputType="NUMBER"
                            inputTxt="... mgs"
                        />
                    </View>
                    <CancelAndSaveButton
                        onPress={() => setShowNewMedicines(false)}
                    />
                </ModalContainer>
            ) : (
                <></>
            )}

            {showMedicineData ? (
                <ModalContainer>
                    <Header
                        text="Novo Medicamento"
                        isModal
                        onModalClose={() => setShowMedicineData(false)}
                    />
                    <View>
                        <ListInteractableItem
                            text="Nome: "
                            text2="Losartana"
                            isButton={false}
                        />
                        <ListInteractableItem
                            text="Horário:"
                            text2="08:00"
                            isButton={false}
                        />
                        <ListInteractableItem
                            text="Período:"
                            text2="7 dias"
                            isButton={false}
                        />
                        <ListInteractableItem
                            text="Intervalo:"
                            text2="8 horas"
                            isButton={false}
                        />
                        <ListInteractableItem
                            text="Quantidade:"
                            text2="1 mg"
                            isButton={false}
                        />
                    </View>
                    <CancelAndSaveButton
                        onPress={() => setShowMedicineData(false)}
                    />
                </ModalContainer>
            ) : (
                <></>
            )}
        </>
    );
}
