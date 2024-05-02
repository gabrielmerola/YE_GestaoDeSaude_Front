import { Header } from "@components/Header";
import { VStack, ScrollView, View, Input } from "native-base";
import Icons from "react-native-vector-icons/FontAwesome6";

import {
    TextTitle,
    TextSubtitleWhite,
    TextNotificationWhite,
    Button,
    ButtonTextWhite,
    ViewCard
} from "./styles";

export default function Supervision() {
    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center">
                <Header text="Supervisão" isBackPress />
                <View>
                    <TextTitle>
                        Criado para auxilio de notificações com familiares e
                        responsáveis.
                    </TextTitle>
                </View>

                <ViewCard>
                    <TextSubtitleWhite>
                        Insira o email de quem irá ajuda-lo com as notificações
                        do aplicativo:
                    </TextSubtitleWhite>

                    <Input
                        mb={7}
                        placeholder="Digite o email..."
                        size="lg"
                        w="80%"
                        h="40px"
                        borderRadius="lg"
                        bgColor="gray.300"
                        shadow={3}
                        alignSelf="center"
                        editable
                        maxLength={40}
                    />

                    <TextNotificationWhite>
                        <Icons name="check" size={18} />
                        ㅤEmail válido e salvo para análise...
                    </TextNotificationWhite>

                    <TextNotificationWhite>
                        <Icons name="xmark" size={20} />
                        ㅤEmail inválido! Tente novamente...
                    </TextNotificationWhite>

                    <View alignItems="center">
                        <Button>
                            <ButtonTextWhite>Confirmar</ButtonTextWhite>
                        </Button>
                    </View>
                </ViewCard>
            </VStack>
        </ScrollView>
    );
}
