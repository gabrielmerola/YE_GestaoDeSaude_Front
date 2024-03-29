import {
    Container,
    ButtonText,
    Button
} from "@components/CancelAndSaveButton/styles";
import React from "react";

interface CancelAndSaveButtonProps {
    navigation?: any;
}

export default function CancelAndSaveButton({
    navigation
}: CancelAndSaveButtonProps) {
    return (
        <Container>
            <Button onPress={() => navigation.goBack()}>
                <ButtonText> Cancelar</ButtonText>
            </Button>
            <Button onPress={() => navigation.goBack()}>
                <ButtonText> Salvar</ButtonText>
            </Button>
        </Container>
    );
}
