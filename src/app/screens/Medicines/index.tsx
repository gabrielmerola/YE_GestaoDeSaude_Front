import CancelAndSaveButton from "@components/CancelAndSaveButton";
import { Header } from "@components/Header";
import { PopUpAddButton } from "@components/PopUpAddButton";
import {
    MedicineContext,
    MedicineContextProvider
} from "@context/medicine_context";
import {
    ButtonContainer,
    ModalContainer,
    View
} from "@screens/Medicines/styles";
import { AxiosError } from "axios";
import { FlatList } from "native-base";
import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import ListInteractableItem from "src/app/components/ListInteractableItem";
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

export interface Medicine {
    id: number;
    name: string;
    dosage: string;
    period: number;
    quantity: number;
    time: string;
}

export default function Medicines() {
    const [showNewMedicines, setShowNewMedicines] = useState(false);
    const [showMedicineData, setShowMedicineData] = useState(false);
    const [showMedicineDataIndex, setShowMedicineDataIndex] = useState(0);
    const { getAllMedicines } = useContext(MedicineContext);

    const [medicines, setMedicines] = useState<Medicine[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMedicines = async () => {
            try {
                const response = await getAllMedicines();
                if (response && Array.isArray(response)) {
                    const parsedMedicines = response.map((med: any) => ({
                        id: med.id,
                        name: med.name,
                        dosage: med.dosage,
                        period: med.period,
                        quantity: med.quantity,
                        time: med.time
                    }));
                    setMedicines(parsedMedicines);
                }
            } catch (error: AxiosError | any) {
                return console.log(
                    "Erro ao buscar medicamentos: " + error.response
                );
            } finally {
                setIsLoading(false);
            }
        };
        fetchMedicines();
    }, [getAllMedicines]);

    return (
        <MedicineContextProvider>
            <Header text="Medicamentos" isBackPress />
            <View>
                {isLoading && (
                    <ActivityIndicator size="large" color="#0000ff" />
                )}
                <FlatList
                    data={medicines}
                    keyExtractor={(item) =>
                        "All MedicinesKey " + item.id.toString()
                    }
                    renderItem={({ item }) => (
                        <ListInteractableItem
                            text={item.name}
                            text2={item.time}
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
                        medicineData={medicines}
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
                                medicines[
                                    medicines.findIndex(
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
                                medicines[
                                    medicines.findIndex(
                                        (value) =>
                                            value.id === showMedicineDataIndex
                                    )
                                ].time
                            }
                            isButton={false}
                        />
                        <ListInteractableItem
                            text="Período:"
                            text2={
                                medicines[
                                    medicines.findIndex(
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
                                medicines[
                                    medicines.findIndex(
                                        (value) =>
                                            value.id === showMedicineDataIndex
                                    )
                                ].dosage + " horas"
                            }
                            isButton={false}
                        />
                        <ListInteractableItem
                            text="Quantidade:"
                            text2={
                                medicines[
                                    medicines.findIndex(
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
                        medicineData={medicines}
                    />
                </ModalContainer>
            ) : (
                <></>
            )}
        </MedicineContextProvider>
    );
}
