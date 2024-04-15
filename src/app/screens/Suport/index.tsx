import { Header } from "@components/Header";
import { VStack, ScrollView, View, Input } from "native-base";
import { Linking, TouchableOpacity } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
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
                        onPress={() => Linking.openURL(`tel:${11942263007}`)}
                    >
                        (00) 00000-0000
                    </TextSubtitle>
                </View>

                <View flexDir="row">
                    <Icon>
                        <Icons name="envelope" size={35} />
                    </Icon>

                    <TextSubtitle
                        onPress={() =>
                            Linking.openURL(
                                "mailto:mailto@luccaoliveira123@gmail.com?subject=abcdefg&body=body"
                            )
                        }
                    >
                        abcdef@xxxx.com
                    </TextSubtitle>
                </View>

                <TextNormal>
                    Deixe registrado o problema encontrado no aplicativo:
                </TextNormal>

                <Input
                    mb={7}
                    placeholder="Digite o problema encontrado por você no aplicativo..."
                    size="lg"
                    w="90%"
                    h="250px"
                    borderRadius="lg"
                    bgColor="gray.300"
                    shadow={3}
                    alignSelf="center"
                    editable
                    multiline
                    numberOfLines={20}
                    maxLength={1000}
                />
            </VStack>
            <View flexDir="row-reverse">
                <Button>
                    <ButtonTextWhite>Enviar Mensagem</ButtonTextWhite>
                </Button>
            </View>
        </ScrollView>
    );
}
