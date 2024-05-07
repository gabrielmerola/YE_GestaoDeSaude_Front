import { Header } from "@components/Header";
import Modal from "@components/Modal";
import { Title } from "@components/Title/Title";
import { AuthContext } from "@context/auth_context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ButtonOut, ButtonTextWhiteOut } from "@screens/Perfil/styles";
import { VStack, Text, ScrollView, Avatar, Divider } from "native-base";
import { useContext, useEffect, useState } from "react";

export default function Perfil({ navigation }: any) {
    const { getClient } = useContext(AuthContext);

    const [data, setData] = useState({} as any);

    async function getClientid() {
        const response = await getClient();
        console.log(response);
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

    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center">
                <Header text="Seu Perfil" isBackPress />

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
                <Text fontSize="lg">{data.phone}</Text>

                <Divider mt={7} />

                <Title mt={7} mb={5}>
                    Medicamentos
                </Title>
                <Text fontSize="md">Losartana</Text>
                <Text fontSize="md">Hidroclorotiazida</Text>
                <Text fontSize="md">Pantoprazol</Text>
                <Text fontSize="md">Nimesulida</Text>

                <Divider mt={7} mb={7} />

                <Modal />

                <ButtonOut onPress={logout}>
                    <ButtonTextWhiteOut>Sair</ButtonTextWhiteOut>
                </ButtonOut>
            </VStack>
        </ScrollView>
    );
}
