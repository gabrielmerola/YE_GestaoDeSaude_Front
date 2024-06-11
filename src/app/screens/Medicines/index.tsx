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
import Toast from "react-native-toast-message";
import ListMedicineItem from "src/app/components/ListMedicineItem";

export default function Medicines() {
    const [showNewMedicines, setShowNewMedicines] = useState(false);
    const [showMedicineData, setShowMedicineData] = useState(false);
    const [showMedicineDataIndex, setShowMedicineDataIndex] = useState(0);
    const { getAllMedicines, createMedicine } = useContext(MedicineContext);

    const [medicines, setMedicines] = useState<MedicineFormData[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const [medicineName, setMedicineName] = useState("");
    const [medicineTime, setMedicineTime] = useState("");
    const [medicinePeriod, setMedicinePeriod] = useState("");
    const [medicineQuantity, setMedicineQuantity] = useState("");
    const [medicineDosage, setMedicineDosage] = useState("");

    const twoDotsInput = (text: string) => {
        let formattedValue = text.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
        if (formattedValue.length > 2) {
            formattedValue =
                formattedValue.slice(0, 2) + ":" + formattedValue.slice(2);
        }
        return formattedValue;
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

    const postMedicine = async () => {
        if(medicineName === "" || medicineTime === "" || medicinePeriod === "" || medicineQuantity === "" || medicineDosage === ""){
            Toast.show({
                type: "error",
                text1: "Erro ao criar medicamento",
                text2: "Preencha todos os campos"
            });
            return;
        }
        const json = {
            name: medicineName,
            time: medicineTime + ":00:00",
            period: Number(medicinePeriod),
            quantity: Number(medicineQuantity),
            dosage: medicineDosage
        };

        console.log(json)
        await createMedicine(json).then((response: any) => {
            if(response.status !== 201){
                console.log(response);
            } else {
                console.log(response.data)
                setMedicineName("");
                setMedicineTime("");
                setMedicinePeriod("");
                setMedicineQuantity("");
                setMedicineDosage("");
                setShowNewMedicines(false);
            }
        })
    };

    useFocusEffect(
        React.useCallback(() => {
            fetchMedicines();
        }, [showNewMedicines])
    );

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
                        <ListMedicineItem
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
                        <ListMedicineItem
                            text="Nome: "
                            isButton={false}
                            inputType="TEXT"
                            inputTxt="Digite o nome do medicamento..."
                            sizeType="LARGE"
                            onChangeText={setMedicineName}
                            inputValue={medicineName}
                        />
                        <ListMedicineItem
                            text="Horário:"
                            isButton={false}
                            inputType="TIME"
                            inputTxt="apenas horas"
                            onChangeText={setMedicineTime}
                            inputValue={medicineTime}
                        />
                        <ListMedicineItem
                            text="Período:"
                            isButton={false}
                            inputType="NUMBER"
                            inputTxt="... dias"
                            onChangeText={setMedicinePeriod}
                            inputValue={medicinePeriod}
                        />
                        <ListMedicineItem
                            text="Quantidade:"
                            isButton={false}
                            inputType="NUMBER"
                            inputTxt="... mgs"
                            onChangeText={setMedicineQuantity}
                            inputValue={medicineQuantity}
                        />
                        <ListMedicineItem
                            text="Dosagem:"
                            isButton={false}
                            inputType="TEXT"
                            inputTxt="... comprimido de ... mg"
                            onChangeText={setMedicineDosage}
                            inputValue={medicineDosage}
                        />
                    </View>
                    <CancelAndSaveButton
                        onPress={() => postMedicine()}
                        onBack={() => setShowNewMedicines(false)}
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
                        <ListMedicineItem
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
                        <ListMedicineItem
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
                        <ListMedicineItem
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
                        <ListMedicineItem
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
                        <ListMedicineItem
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
        </MedicineContextProvider>
    );
}