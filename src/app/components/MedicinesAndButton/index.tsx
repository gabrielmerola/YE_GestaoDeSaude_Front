import {
    MedicineButton,
    MedicineView,
    Txt,
    Input
} from "@components/MedicinesAndButton/styles";
import { ChevronRightIcon } from "native-base";
import React from "react";

interface MedicineAndButtonProps {
    text: string;
    text2?: string;
    chevron?: boolean;
    navigation: any;
    screenName: string;
    input?: boolean;
}

export default function MedicinesAndButton({
    text,
    text2,
    chevron,
    navigation,
    screenName,
    input
}: MedicineAndButtonProps) {
    return (
        <MedicineButton onPress={() => navigation.navigate(screenName)}>
            <MedicineView>
                <Txt>
                    {text} {text2 && `: ${text2}`}
                </Txt>
                {input && (
                    <Input placeholder="Digite o nome do medicamento..." />
                )}
                {chevron && <ChevronRightIcon />}
            </MedicineView>
        </MedicineButton>
    );
}
