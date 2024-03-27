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
    modalFunction: () => void;
    input?: boolean;
}

export default function MedicinesAndButton({
    text,
    text2,
    chevron,
    modalFunction,
    input
}: MedicineAndButtonProps) {
    return (
        <MedicineButton onPress={() => modalFunction}>
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
