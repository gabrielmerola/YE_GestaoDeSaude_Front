import { Header } from "@components/Header";
import { VStack, HStack, Center } from "native-base";
import React from "react";

import { FooterContact, TextData, Text } from "./styles";
import ConfigButtons from "../../components/ConfigButtons";

export default function Settings({ navigation }: any) {
    const buttons = [
        {
            text: "Notificações",
            iconSource: require("assets/notificacao.png"),
            screenName: "Notification"
        },
        {
            text: "Suporte",
            iconSource: require("assets/suporte.png"),
            screenName: "Suport"
        },
        {
            text: "Perfil",
            iconSource: require("assets/perfil.png"),
            screenName: "Perfil"
        },
        /*{
            text: "Idioma",
            iconSource: require("assets/Idioma.png"),
            screenName: "Language"
        },*/
        {
            text: "Supervisão",
            iconSource: require("assets/Supervisao.png"),
            screenName: "Supervision"
        },
        {
            text: "Segurança",
            iconSource: require("assets/Seguranca.png"),
            screenName: "Security"
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
            <FooterContact>
                <Center>
                    <HStack space={1}>
                        <Text>Dados para contato:</Text>
                        <TextData>abcdef@xxxx.com/(00) 00000-0000</TextData>
                    </HStack>
                </Center>
            </FooterContact>
        </VStack>
    );
}
