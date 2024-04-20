import CancelAndSaveButton from "@components/CancelAndSaveButton";
import { Header } from "@components/Header";
import { PopUpAddButton } from "@components/PopUpAddButton";
import {
    ButtonContainer,
    ModalContainer,
    View
} from "@screens/Medicines/styles";
import { FlatList } from "native-base";
import React, { useEffect, useState } from "react";
import ListInteractableItem from "src/app/components/ListInteractableItem";

const json = [
    {
        id: 1,
        name: "Losartana",
        hour: "08:00",
        period: "7",
        hour_interval: "8",
        quantity: "1"
    },
    {
        id: 2,
        name: "Hidroclorotiazida",
        hour: "08:00",
        period: "14",
        hour_interval: "6",
        quantity: "0.5"
    },
    {
        id: 3,
        name: "Pantoprazol",
        hour: "12:00",
        period: "30",
        hour_interval: "24",
        quantity: "2"
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
    const [showMedicineDataIndex, setShowMedicineDataIndex] = useState(0);

    const [data, setData] = useState([{}]);

    useEffect(() => {
        setData(json);
    }, []);

    return (
        <>
            <Header text="Medicamentos" isBackPress />
            <View>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <ListInteractableItem
                            text={item.name}
                            text2={item.hour}
                            isButton
                            modalFunction={() => {
                                setShowMedicineData(true);
                                setShowMedicineDataIndex(item.id);
                            }}
                        />
                    )}
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
                            inputType="DATE"
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
                            text2={
                                json[
                                    json.findIndex(
                                        (value) =>
                                            value.id === showMedicineDataIndex
                                    )
                                ].name
                            }
                            isButton={false}
                        />
                        <ListInteractableItem
                            text="Horário:"
                            text2={
                                json[
                                    json.findIndex(
                                        (value) =>
                                            value.id === showMedicineDataIndex
                                    )
                                ].hour
                            }
                            isButton={false}
                        />
                        <ListInteractableItem
                            text="Período:"
                            text2={
                                json[
                                    json.findIndex(
                                        (value) =>
                                            value.id === showMedicineDataIndex
                                    )
                                ].period + " dias"
                            }
                            isButton={false}
                        />
                        <ListInteractableItem
                            text="Intervalo:"
                            text2={
                                json[
                                    json.findIndex(
                                        (value) =>
                                            value.id === showMedicineDataIndex
                                    )
                                ].hour_interval + " horas"
                            }
                            isButton={false}
                        />
                        <ListInteractableItem
                            text="Quantidade:"
                            text2={
                                json[
                                    json.findIndex(
                                        (value) =>
                                            value.id === showMedicineDataIndex
                                    )
                                ].quantity +
                                (showMedicineDataIndex === 1 ? " mg" : " mgs")
                            }
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
