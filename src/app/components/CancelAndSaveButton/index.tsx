import {
    Container,
    ButtonText,
    Button
} from "@components/CancelAndSaveButton/styles";
import React from "react";

interface CancelAndSaveButtonProps {
    onPress: () => void;
}

export default function CancelAndSaveButton({
    onPress
}: CancelAndSaveButtonProps) {
    return (
        <Container>
            <Button onPress={onPress}>
                <ButtonText> Cancelar</ButtonText>
            </Button>
            <Button onPress={onPress}>
                <ButtonText> Salvar</ButtonText>
            </Button>
        </Container>
    );
}
