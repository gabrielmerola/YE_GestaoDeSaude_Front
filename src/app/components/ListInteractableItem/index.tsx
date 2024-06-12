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
import {formatDate} from "@utils/formatDate";

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
    setInputValue?: (text: string) => void;
    setDate?: (text: string) => void;
    downChevron?: boolean;
    changeIcon?: boolean;
}

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
    changeIcon,
    setInputValue,
                                                 setDate
}: MedicineAndButtonProps) {
    const [twoDots, setTwoDots] = useState("");
    const twoDotsInput = (text: string) => {
        let formattedValue = text.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
        if (formattedValue.length > 2) {
            formattedValue =
                formattedValue.slice(0, 2) + ":" + formattedValue.slice(2);
        }
        if(setInputValue != undefined) setInputValue(formattedValue);
    };

    const handleDate = (inputDate: string) => {
        if(setDate != undefined) {
            setDate(formatDate(inputDate));
        }
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
                    <InputView sizeType="DATE">
                        <Input
                            keyboardType="numeric"
                            placeholder="__/__/____"
                            onChangeText={handleDate}
                            value={inputValue}
                            maxLength={10}
                        />
                    </InputView>
                ) : inputType === "NUMBER" ? (
                    <InputView sizeType="SMALL">
                        <Input keyboardType="numeric" placeholder={inputTxt} />
                    </InputView>
                ) : inputType === "TIME" ? (
                    <InputView sizeType="DATE">
                        <Input
                            keyboardType="numeric"
                            placeholder={inputTxt}
                            maxLength={5}
                            value={inputValue}
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
