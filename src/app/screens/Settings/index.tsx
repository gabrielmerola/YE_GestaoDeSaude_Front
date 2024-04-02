import { Header } from "@components/Header";
import { VStack } from "native-base";
import React from "react";

import { Txt, ImageData, TextContact, Container, SecContainer } from "./styles";
import ConfigButtons from "../../components/ConfigButtons";

const Settings = ({ navigation }: any) => {
    const buttons = [
        {
            text: "Notificações",
            iconSource: require("assets/notificacao.png"),
            screenName: "Login"
        },
        {
            text: "Suporte",
            iconSource: require("assets/suporte.png"),
            screenName: "Login"
        },
        {
            text: "Perfil",
            iconSource: require("assets/perfil.png"),
            screenName: "Perfil"
        },
        {
            text: "Idioma",
            iconSource: require("assets/Idioma.png"),
            screenName: "Login"
        }
    ];

    const handleNavigation = (screenName: string) => {
        navigation.navigate(screenName);
    };

    return (
        <VStack>
            <Header text="Configurações" isBackPress />
            {buttons.map((button, index) => (
                <ConfigButtons
                    key={index}
                    onPress={() => handleNavigation(button.screenName)}
                    text={button.text}
                    iconSource={button.iconSource}
                />
            ))}
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
};

export default Settings;
