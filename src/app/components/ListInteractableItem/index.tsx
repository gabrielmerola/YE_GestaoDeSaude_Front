import {
    MedicineButton,
    MedicineView,
    Txt,
    Input,
    ButtonView
} from "@components/ListInteractableItem/styles";
import { ChevronRightIcon } from "native-base";
import React from "react";

export type InputType = "TEXT" | "TIME" | "NUMBER" | "DATE";

interface MedicineAndButtonProps {
    isButton: boolean;
    text: string;
    text2?: string;
    modalFunction?: () => void;
    inputTxt?: string;
    inputType?: InputType;
}

export default function ListInteractableItem({
    text,
    text2,
    modalFunction,
    inputTxt,
    isButton,
    inputType
}: MedicineAndButtonProps) {
    if (isButton) {
        return (
            <MedicineButton onPress={modalFunction}>
                <ButtonView>
                    <Txt>
                        {text} {text2 && `: ${text2}`}
                    </Txt>
                    <ChevronRightIcon color="black" />
                </ButtonView>
            </MedicineButton>
        );
    } else if (inputType) {
        return (
            <MedicineView>
                <Txt>{`${text} `}</Txt>
                {inputType === "TEXT" ? (
                    <Input placeholder={inputTxt} sizeType={inputType} />
                ) : inputType === "DATE" ? (
                    <Input
                        keyboardType="numeric"
                        placeholder={inputTxt}
                        sizeType={inputType}
                    />
                ) : inputType === "NUMBER" ? (
                    <Input
                        keyboardType="numeric"
                        placeholder={inputTxt}
                        sizeType={inputType}
                    />
                ) : inputType === "TIME" ? (
                    <Input
                        keyboardType="numeric"
                        placeholder={inputTxt}
                        sizeType={inputType}
                    />
                ) : (
                    <></>
                )}
            </MedicineView>
        );
    } else {
        return (
            <MedicineView>
                <Txt>
                    {text} {text2 && `${text2}`}
                </Txt>
            </MedicineView>
        );
    }
}
