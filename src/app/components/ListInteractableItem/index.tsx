import {
    MedicineButton,
    MedicineView,
    Txt,
    Input,
    ButtonView,
    sizeType,
    InputTxt,
    InputView
} from "@components/ListInteractableItem/styles";
import { ChevronRightIcon, ChevronDownIcon, ChevronUpIcon } from "native-base";
import React, { useState } from "react";

export type InputType = "TEXT" | "TIME" | "NUMBER" | "DATE";

interface MedicineAndButtonProps {
    isButton: boolean;
    text: string;
    text2?: string;
    modalFunction?: () => void;
    inputTxt?: string;
    inputType?: InputType;
    sizeType?: sizeType;
    onChangeText?: (text: string) => void;
    inputValue?: string;
    downChevron?: boolean;
    changeIcon?: boolean;
}

export const formatInput = (input: string, inputType: InputType): string => {
    let returnInput = "";
    if (inputType === "DATE") {
        returnInput = formatDate(input);
    } else if (inputType === "TIME") {
        returnInput = input.replace(/\D/g, "");
        if (returnInput.length > 2) {
            returnInput = `${returnInput.slice(0, 2)}:${returnInput.slice(2)}`;
        }
    }
    return returnInput;
};

const formatDate = (inputDate: string): string => {
    let formattedInput = inputDate.replace(/\D/g, "");

    switch (formattedInput.length) {
        case 1:
            formattedInput = /^([0-3])$/.test(formattedInput)
                ? `${formattedInput}`
                : "";
            break;

        case 2:
            formattedInput = /^(0[1-9]|[12][0-9]|3[01])$/.test(formattedInput)
                ? `${formattedInput}`
                : formattedInput.slice(0, 1);
            break;

        case 3:
            formattedInput = /^([01])/.test(formattedInput.slice(2, 3))
                ? `${formattedInput.slice(0, 2)}/${formattedInput.slice(2)}`
                : `${formattedInput.slice(0, 2)}`;
            break;

        case 4:
            const day = formattedInput.slice(0, 2);
            const month = formattedInput.slice(2, 4);

            if (
                /^(0[1-9]|[12][0-9]|3[01])$/.test(day) &&
                ((month !== "02" &&
                    month !== "04" &&
                    month !== "06" &&
                    month !== "09" &&
                    month !== "11") ||
                    (month === "02" && day <= "29") ||
                    ((month === "04" ||
                        month === "06" ||
                        month === "09" ||
                        month === "11") &&
                        day <= "30"))
            ) {
                formattedInput = `${formattedInput.slice(0, 2)}/${formattedInput.slice(2)}`;
            } else {
                formattedInput = `${formattedInput.slice(0, 2)}/${formattedInput.slice(2, 3)}`;
            }
            break;
        case 5:
            formattedInput = /^(2)/.test(formattedInput.slice(4, 5))
                ? `${formattedInput.slice(0, 2)}/${formattedInput.slice(2, 4)}/${formattedInput.slice(4)}`
                : `${formattedInput.slice(0, 2)}/${formattedInput.slice(2, 4)}`;
            break;

        case 6:
            formattedInput = /^(2[01])/.test(formattedInput.slice(4, 6))
                ? `${formattedInput.slice(0, 2)}/${formattedInput.slice(2, 4)}/${formattedInput.slice(4)}`
                : `${formattedInput.slice(0, 2)}/${formattedInput.slice(2, 4)}/${formattedInput.slice(4, 5)}`;
            break;

        case 7:
            formattedInput = /^(20[2-9]|21[0-9])/.test(
                formattedInput.slice(4, 7)
            )
                ? `${formattedInput.slice(0, 2)}/${formattedInput.slice(2, 4)}/${formattedInput.slice(4)}`
                : `${formattedInput.slice(0, 2)}/${formattedInput.slice(2, 4)}/${formattedInput.slice(4, 6)}`;
            break;

        case 8:
            const yearEnd = parseInt(formattedInput.slice(6, 8));
            if (
                (/^(20[2-9][4-9]|21[0-9][0-9])/.test(
                    formattedInput.slice(4, 8)
                ) &&
                    formattedInput.slice(0, 2) !== "29") ||
                yearEnd % 4 === 0
            ) {
                formattedInput = `${formattedInput.slice(0, 2)}/${formattedInput.slice(2, 4)}/${formattedInput.slice(4)}`;
            } else {
                formattedInput = `${formattedInput.slice(0, 2)}/${formattedInput.slice(2, 4)}/${formattedInput.slice(4, 7)}`;
            }
            break;

        default:
            break;
    }

    return formattedInput;
};

export default function ListInteractableItem({
    text,
    text2,
    modalFunction,
    inputTxt,
    isButton,
    inputType,
    sizeType,
    onChangeText,
    inputValue,
    downChevron,
    changeIcon
}: MedicineAndButtonProps) {
    const [twoDots, setTwoDots] = useState("");
    const twoDotsInput = (text: string) => {
        let formattedValue = text.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
        if (formattedValue.length > 2) {
            formattedValue =
                formattedValue.slice(0, 2) + ":" + formattedValue.slice(2);
        }
        setTwoDots(formattedValue);
    };

    if (isButton) {
        return (
            <MedicineButton
                onPress={() => {
                    modalFunction?.();
                }}
            >
                <ButtonView>
                    <Txt>
                        {text} {text2 && `: ${text2}`}
                    </Txt>
                    {downChevron ? (
                        changeIcon ? (
                            <ChevronDownIcon color="black" />
                        ) : (
                            <ChevronUpIcon color="black" />
                        )
                    ) : (
                        <ChevronRightIcon color="black" />
                    )}
                </ButtonView>
            </MedicineButton>
        );
    } else if (inputType) {
        return (
            <MedicineView>
                <InputTxt>{`${text} `}</InputTxt>
                {inputType === "TEXT" ? (
                    <InputView sizeType={sizeType}>
                        <Input
                            placeholder={inputTxt}
                            onChangeText={onChangeText}
                            value={inputValue}
                        />
                    </InputView>
                ) : inputType === "DATE" ? (
                    <InputView sizeType="SMALL">
                        <Input
                            keyboardType="numeric"
                            placeholder="Digite o período..."
                            onChangeText={formatDate}
                            value={inputValue}
                            maxLength={10}
                        />
                    </InputView>
                ) : inputType === "NUMBER" ? (
                    <InputView sizeType="SMALL">
                        <Input keyboardType="numeric" placeholder={inputTxt} />
                    </InputView>
                ) : inputType === "TIME" ? (
                    <InputView sizeType="SMALL">
                        <Input
                            keyboardType="numeric"
                            placeholder={inputTxt}
                            maxLength={5}
                            value={twoDots}
                            onChangeText={twoDotsInput}
                        />
                    </InputView>
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
