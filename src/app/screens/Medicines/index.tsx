import { MedicineFormData } from "@api/repositories/medicine_repository_http";
import CancelAndSaveButton from "@components/CancelAndSaveButton";
import { Header } from "@components/Header";
import { PopUpAddButton } from "@components/PopUpAddButton";
import {
    MedicineContext,
    MedicineContextProvider
} from "@context/medicine_context";
import { useFocusEffect } from "@react-navigation/native";
import {
    ButtonContainer,
    ModalContainer,
    View
} from "@screens/Medicines/styles";
import { AxiosError } from "axios";
import { FlatList } from "native-base";
import React, { useContext, useState } from "react";
import { ActivityIndicator } from "react-native";
import ListInteractableItem, {
    InputType
} from "src/app/components/ListInteractableItem";
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
    const { getAllMedicines } = useContext(MedicineContext);

    const [medicines, setMedicines] = useState<MedicineFormData[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const [medicineName, setMedicineName] = useState("");
    const [medicineTime, setMedicineTime] = useState("");
    const [medicinePeriod, setMedicinePeriod] = useState("");
    const [medicineQuantity, setMedicineQuantity] = useState("");
    const [medicineDosage, setMedicineDosage] = useState("");

    const handleMedicineNameChange = (text: string) => {
        setMedicineName(text);
    };

    const handleMedicineTimeChange = (text: string) => {
        setMedicineTime(text);
    };

    const handleMedicinePeriodChange = (text: string) => {
        setMedicinePeriod(text);
    };

    const handleMedicineQuantityChange = (text: string) => {
        setMedicineQuantity(text);
    };

    const handleMedicineDosageChange = (text: string) => {
        setMedicineDosage(text);
    };

    const [formData, setFormData] = useState<MedicineFormData>({
        id: 0,
        name: "",
        time: "",
        period: 0,
        quantity: 0,
        dosage: ""
    });

    const handleInputChange = (
        value: string | number,
        inputType: InputType
    ) => {
        setFormData((prevData) => ({
            ...prevData,
            [inputType]: value
        }));
    };

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

    useFocusEffect(
        React.useCallback(() => {
            fetchMedicines();
        }, [formData])
    );

    return (
        <>
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
                            onChangeText={handleMedicineNameChange}
                            inputValue={medicineName}
                        />
                        <ListInteractableItem
                            text="Horário:"
                            isButton={false}
                            inputType="TIME"
                            inputTxt="00:00"
                            onChangeText={handleMedicineTimeChange}
                            inputValue={medicineTime}
                        />
                        <ListInteractableItem
                            text="Período:"
                            isButton={false}
                            inputType="NUMBER"
                            inputTxt="... dias"
                            onChangeText={handleMedicinePeriodChange}
                            inputValue={medicinePeriod}
                        />
                        <ListInteractableItem
                            text="Quantidade:"
                            isButton={false}
                            inputType="NUMBER"
                            inputTxt="... mgs"
                            onChangeText={handleMedicineQuantityChange}
                            inputValue={medicineQuantity}
                        />
                        <ListInteractableItem
                            text="Dosagem:"
                            isButton={false}
                            inputType="TEXT"
                            inputTxt="... comprimido de ... mg"
                            onChangeText={handleMedicineDosageChange}
                            inputValue={medicineDosage}
                        />
                    </View>
                    <CancelAndSaveButton
                        onPress={() => setShowNewMedicines(false)}
                        medicineData={{
                            name: medicineName,
                            time: medicineTime + ":00",
                            period: medicinePeriod,
                            quantity: medicineQuantity,
                            dosage: medicineDosage
                        }}
                    />
                </ModalContainer>
            ) : (
                <></>
            )}

            {showMedicineData ? (
                <ModalContainer>
                    <Header
                        text="Ver Medicamento"
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
                                ].period +
                                ` ${
                                    medicines[
                                        medicines.findIndex(
                                            (value) =>
                                                value.id ===
                                                showMedicineDataIndex
                                        )
                                    ].period === 1
                                        ? " dia"
                                        : " dias"
                                }`
                            }
                            isButton={false}
                        />
                        <ListInteractableItem
                            text="Dosagem:"
                            text2={
                                medicines[
                                    medicines.findIndex(
                                        (value) =>
                                            value.id === showMedicineDataIndex
                                    )
                                ].dosage
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
                        isDelete
                        idMedicine={showMedicineDataIndex}
                        onPress={() => setShowMedicineData(false)}
                        medicineData={medicines}
                    />
                </ModalContainer>
            ) : (
                <></>
            )}
        </>
    );
}
