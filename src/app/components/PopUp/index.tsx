import {
    PopUpContainer,
    Container,
    Title,
    ModalContainer,
    Txt,
    ButtonsContainer,
    Button,
    ButtonText,
    BottomContainer,
    Input,
    TextInputContainer
} from "@components/PopUp/styles";
import { useState } from "react";

export type popUpType = "PRESSURE" | "GLUCOSE" | "IMC";

interface Props {
    onClose: () => void;
    onPost: (list: object) => void;
    popUpType: popUpType;
}

export const formatDate = (inputDate: string): string => {
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

export default function PopUp({ onClose, onPost, popUpType }: Props) {
    const [date, setDate] = useState<string>("");
    const [firstMeasure, setFirstMeasure] = useState<string>("");
    const [secondMeasure, setSecondMeasure] = useState<string>("");

    const handleDate = (inputDate: string) => {
        setDate(formatDate(inputDate));
    };
    const handlePost = () => {
        if (
            popUpType === "PRESSURE" &&
            date.length === 10 &&
            /^([0-3])(0[1-9]|[12][0-9]|3[01])([01])(0[1-9]|[12][0-9]|3[01])(20[2-9]|21[0-9])$/.test(
                date
            ) &&
            firstMeasure.length >= 2 &&
            secondMeasure.length >= 2
        ) {
            const measure = `${firstMeasure} x ${secondMeasure}`;
            const list = {
                date,
                measure
            };
            onPost(list);
            onClose();
        } else if (
            popUpType === "GLUCOSE" &&
            date.length === 10 &&
            // /^([0-3])(0[1-9]|[12][0-9]|3[01])([01])(0[1-9]|[12][0-9]|3[01])(20[2-9]|21[0-9])$/.test(
            //     date
            // ) &&
            firstMeasure.length >= 2
        ) {
            const measure = parseInt(firstMeasure);
            const newDate = date.split("/").reverse().join("-");
            const list = {
                date: newDate,
                measure
            };
            console.log(list);
            onPost(list);
            onClose();
        } else {
            //criar um toast
            alert("Preencha os campos corretamente");
        }
    };

    return (
        <>
            <Container>
                <ModalContainer>
                    <PopUpContainer>
                        <Title>Adicionar outra medida?</Title>
                        <TextInputContainer>
                            <Txt>Data:</Txt>
                            <Input
                                placeholder="XX/XX/XXXX"
                                onChangeText={handleDate}
                                value={date}
                                maxLength={10}
                                size="LARGE"
                            />
                        </TextInputContainer>
                        {popUpType === "PRESSURE" ? (
                            <TextInputContainer>
                                <Txt>Medida:</Txt>
                                <Input
                                    placeholder="120"
                                    onChangeText={(text) =>
                                        setFirstMeasure(text)
                                    }
                                    value={firstMeasure}
                                    maxLength={3}
                                    size="SMALL"
                                />
                                <Txt> x</Txt>
                                <Input
                                    placeholder="80"
                                    onChangeText={(text) =>
                                        setSecondMeasure(text)
                                    }
                                    value={secondMeasure}
                                    maxLength={3}
                                    size="SMALL"
                                />
                            </TextInputContainer>
                        ) : popUpType === "GLUCOSE" ? (
                            <TextInputContainer>
                                <Txt>Medida:</Txt>
                                <Input
                                    placeholder="120"
                                    onChangeText={(text) =>
                                        setFirstMeasure(text)
                                    }
                                    value={firstMeasure}
                                    maxLength={3}
                                    size="SMALL"
                                />
                                <Txt> mg/dL</Txt>
                            </TextInputContainer>
                        ) : (
                            <>
                                <TextInputContainer>
                                    <Txt>Altura:</Txt>
                                    <Input
                                        placeholder="175"
                                        onChangeText={(text) =>
                                            setFirstMeasure(text)
                                        }
                                        value={firstMeasure}
                                        maxLength={3}
                                        size="SMALL"
                                    />
                                    <Txt> cm</Txt>
                                </TextInputContainer>
                                <TextInputContainer>
                                    <Txt>Peso:</Txt>
                                    <Input
                                        placeholder="70"
                                        onChangeText={(text) =>
                                            setFirstMeasure(text)
                                        }
                                        value={firstMeasure}
                                        maxLength={3}
                                        size="SMALL"
                                    />
                                    <Txt> kgs</Txt>
                                </TextInputContainer>
                            </>
                        )}

                        <BottomContainer>
                            <ButtonsContainer>
                                <Button type="CANCEL" onPress={onClose}>
                                    <ButtonText type="CANCEL">
                                        Cancelar
                                    </ButtonText>
                                </Button>
                                <Button type="ADD" onPress={handlePost}>
                                    <ButtonText type="ADD">
                                        Confirmar
                                    </ButtonText>
                                </Button>
                            </ButtonsContainer>
                        </BottomContainer>
                    </PopUpContainer>
                </ModalContainer>
            </Container>
        </>
    );
}
