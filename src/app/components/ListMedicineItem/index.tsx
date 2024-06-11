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

export default function ListMedicineItem({
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
                            onChangeText={onChangeText}
                            value={inputValue}
                            maxLength={10}
                        />
                    </InputView>
                ) : inputType === "NUMBER" ? (
                    <InputView sizeType="SMALL">
                        <Input keyboardType="numeric" onChangeText={onChangeText} placeholder={inputTxt} />
                    </InputView>
                ) : inputType === "TIME" ? (
                    <InputView sizeType="SMALL">
                        <Input
                            keyboardType="numeric"
                            placeholder={inputTxt}
                            maxLength={5}
                            value={inputValue}
                            onChangeText={onChangeText}
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
