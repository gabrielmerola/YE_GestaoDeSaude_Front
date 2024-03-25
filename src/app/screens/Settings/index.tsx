import { Header } from "@components/Header";
import { VStack } from "native-base";

import {
    Button,
    ButtonText,
    Txt,
    ImageData,
    Image,
    TextContact,
    Container,
    SecContainer,
    ImageIcon
} from "./styles";

export default function Settings({ navigation }: any) {
    return (
        <VStack>
            <Header text="Configurações" isBackPress />
            <Button onPress={() => navigation.navigate("Login")}>
                <ButtonText>Notificações</ButtonText>
                <ImageIcon source={require("assets/Sino.png")} />
            </Button>
            <Button onPress={() => navigation.navigate("Login")}>
                <ButtonText>Suporte</ButtonText>
                <ImageIcon source={require("assets/Ferramenta.png")} />
            </Button>
            <Button onPress={() => navigation.navigate("Perfil")}>
                <ButtonText>Conta</ButtonText>
                <Image source={require("assets/perfill.png")} />
            </Button>
            <Button onPress={() => navigation.navigate("Login")}>
                <ButtonText>Idioma</ButtonText>
                <Image source={require("assets/Idioma.png")} />
            </Button>

            <Container>
                <Txt>Dados para contato:</Txt>
                <SecContainer>
                    <ImageData source={require("assets/Telefone.png")} />
                    <TextContact>(00) 00000-0000</TextContact>
                </SecContainer>
                <SecContainer>
                    <ImageData source={require("assets/Email.png")} />
                    <TextContact>abcdef@xxxx.com</TextContact>
                </SecContainer>
            </Container>
        </VStack>
    );
}
