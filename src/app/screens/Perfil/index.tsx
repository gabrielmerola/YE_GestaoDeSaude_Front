import { Header } from "@components/Header";
import Modal from "@components/Modal";
import { Title } from "@components/Title/Title";
import { AuthContext } from "@context/auth_context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ButtonOut, ButtonTextWhiteOut } from "@screens/Perfil/styles";
import { VStack, Text, ScrollView, Avatar, Divider } from "native-base";
import { useContext } from "react";

export default function Perfil({ navigation }: any) {
    const logout = async () => {
        try {
            // Remove o token do AsyncStorage
            await AsyncStorage.removeItem("token");
            // Navega o usuário de volta para a tela de login
            navigation.navigate("Login");
        } catch (error) {
            console.error("Erro ao sair da conta:", error);
            // Trate o erro conforme necessário
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
                    Lucca Oliveira
                </Text>
                <Text fontSize="lg" mb={1}>
                    30/07/2004
                </Text>
                <Text fontSize="lg">Santo André - SP</Text>

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
