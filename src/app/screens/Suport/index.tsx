import { Header } from "@components/Header";
import { VStack, ScrollView, View, Input, useToast } from "native-base";
import { Linking } from "react-native";
import Icons from "react-native-vector-icons/FontAwesome5";

import {
    TextTitle,
    TextSubtitle,
    TextNormal,
    Icon,
    Button,
    ButtonTextWhite
} from "./styles";

export default function Suporte() {
    const toast = useToast();
    return (
        <ScrollView flex={1}>
            <VStack flex={1}>
                <Header text="Suporte" isBackPress />

                <TextTitle>Dados para contato:</TextTitle>

                <View flexDir="row">
                    <Icon>
                        <Icons name="whatsapp" solid size={40} />
                    </Icon>
                    <TextSubtitle
                        onPress={() => Linking.openURL(`tel:${1131726800}`)}
                    >
                        (11) 3172-6800
                    </TextSubtitle>
                </View>

                <View flexDir="row">
                    <Icon>
                        <Icons name="envelope" size={35} />
                    </Icon>

                    <TextSubtitle
                        onPress={() =>
                            Linking.openURL(
                                "mailto:sac@hospitalsaocamilosp.org.br?subject=&body="
                            )
                        }
                    >
                        sac@hospitalsaocamilosp.org.br
                    </TextSubtitle>
                </View>

                <TextNormal>
                    Encontrou um problema no aplicativo? Descreva o problema
                    encontrado abaixo:
                </TextNormal>

                <Input
                    mb={7}
                    placeholder="Digite o problema encontrado por você no aplicativo..."
                    size="lg"
                    w="90%"
                    h="250px"
                    borderRadius="lg"
                    bgColor="gray.200"
                    shadow={3}
                    textAlignVertical="top"
                    alignSelf="center"
                    editable
                    multiline
                    numberOfLines={20}
                    maxLength={1000}
                />
            </VStack>
            <View mb={4} flexDir="row-reverse">
                <Button>
                    <ButtonTextWhite>Enviar Mensagem</ButtonTextWhite>
                </Button>
            </View>
        </ScrollView>
    );
}
