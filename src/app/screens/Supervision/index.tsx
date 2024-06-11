import { Header } from "@components/Header";
import { VStack, ScrollView, View, Input } from "native-base";
import { useToast } from "native-base";
import { useState } from "react";

import {
    TextTitle,
    TextSubtitleWhite,
    TextNotificationWhite,
    Button,
    ButtonTextWhite,
    ViewCard
} from "./styles";

export default function Supervision() {
    const [email, setEmail] = useState<string>('');
    const toast = useToast();

    const validateEmail = (email: string) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handlePress = () => {
        if (validateEmail(email)) {
            toast.show({
                title: "Concluído!",
                description: "Email válidado com sucesso.",
                backgroundColor: "green.500",
                placement: "top"
            });
            setEmail('');
        } else {
            toast.show({
                title: "Email inválido!",
                description: "Preencha novamente o email.",
                backgroundColor: "red.500",
                placement: "top"
            });
        }
    };

    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center">
                <Header text="Supervisão" isBackPress />
                <View>
                    <TextTitle>
                        Criado para auxilio de notificações com familiares e responsáveis.
                    </TextTitle>
                </View>

                <ViewCard>
                    <TextSubtitleWhite>
                        Insira o email de quem irá ajuda-lo com as notificações do aplicativo:
                    </TextSubtitleWhite>

                    <Input
                        mb={7}
                        placeholder="Digite o email..."
                        size="lg"
                        w="80%"
                        h="40px"
                        borderRadius="lg"
                        bgColor="gray.200"
                        shadow={3}
                        alignSelf="center"
                        editable
                        maxLength={40}
                        value={email}  
                        onChangeText={setEmail}  
                    />

                    <View alignItems="center">
                        <Button onPress={handlePress}>
                            <ButtonTextWhite>Confirmar</ButtonTextWhite>
                        </Button>
                    </View>
                </ViewCard>
            </VStack>
        </ScrollView>
    );
}
