import { MedicineFormData } from "@api/repositories/medicine_repository_http";
import { Header } from "@components/Header";
import Modal from "@components/Modal";
import { Title } from "@components/Title/Title";
import { AuthContext } from "@context/auth_context";
import { MedicineContext } from "@context/medicine_context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { ButtonOut, ButtonTextWhiteOut } from "@screens/Perfil/styles";
import { AxiosError } from "axios/index";
import { VStack, Text, ScrollView, Avatar, Divider } from "native-base";
import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

export default function Perfil({ navigation }: any) {
    const { getClient } = useContext(AuthContext);
    const [data, setData] = useState({} as any);
    const [formData, setFormData] = useState<MedicineFormData>({
        id: 0,
        name: "",
        time: "",
        period: 0,
        quantity: 0,
        dosage: ""
    });
    const [medicineName, setMedicineName] = useState("");
    const { getAllMedicines } = useContext(MedicineContext);
    const [medicines, setMedicines] = useState<{ id: number; name: string }[]>(
        []
    );
    const [isLoading, setIsLoading] = useState(true);

    async function getClientid() {
        const response = await getClient();
        setData(response);
    }

    useEffect(() => {
        getClientid();
    }, []);

    const logout = async () => {
        try {
            await AsyncStorage.removeItem("token");
            navigation.navigate("Login");
        } catch (error) {
            console.error("Erro ao sair da conta:", error);
        }
    };

    const fetchMedicines = async () => {
        try {
            const response = await getAllMedicines();
            if (response && Array.isArray(response)) {
                const parsedMedicines = response.map((med: any) => ({
                    id: med.id,
                    name: med.name
                }));
                console.log(parsedMedicines);
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
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center">
                <Header text="Seu Perfil" isBackPress />
                {isLoading && (
                    <ActivityIndicator size="large" color="#0000ff" />
                )}
                <Avatar
                    size="2xl"
                    source={{
                        uri: "https://avatars.githubusercontent.com/u/125588055?v=4"
                    }}
                    mt={10}
                />

                <Title mt={10}>Informações Pessoais</Title>
                <Text fontSize="lg" mt={5} mb={1}>
                    {data.name}
                </Text>
                <Text fontSize="lg" mb={1}>
                    {data.email}
                </Text>
                <Text fontSize="lg">
                    ({data.phone?.substring(0, data.phone.indexOf(8))}){" "}
                    {data.phone?.substring(2, data.phone.indexOf(3))}-
                    {data.phone?.substring(7)}
                </Text>

                <Divider mt={7} />

                <Title mt={7} mb={5}>
                    Medicamentos
                </Title>
                {medicines.map((medicine, index) => (
                    <Text key={"TextProfileMedicine " + index} fontSize="md">
                        {medicine.name}
                    </Text>
                ))}

                <Divider mt={7} mb={7} />

                <Modal />

                <ButtonOut onPress={logout}>
                    <ButtonTextWhiteOut>Sair</ButtonTextWhiteOut>
                </ButtonOut>
            </VStack>
        </ScrollView>
    );
}
