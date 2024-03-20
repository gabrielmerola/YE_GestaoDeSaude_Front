import {
    AddButton,
    ButtonText,
    PlusText
} from "@components/BottomAddButton/styles";
import React from "react";

interface BottomAddButtonProps {
    navigation: any;
    screenName: string;
}

export default function BottomAddButton({
    navigation,
    screenName
}: BottomAddButtonProps) {
    return (
        <AddButton onPress={() => navigation.navigate(screenName)}>
            <ButtonText>
                <PlusText>+</PlusText> Adicionar
            </ButtonText>
        </AddButton>
    );
}
