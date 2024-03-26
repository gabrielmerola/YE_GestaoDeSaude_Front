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

interface Props {
    onClose: () => void;
    onPost: (data: string, medida: string) => void;
}

export default function PopUp({ onClose, onPost }: Props) {
    const [date, setDate] = useState<string>("");
    const [firstMeasure, setFirstMeasure] = useState<string>("");
    const [secondMeasure, setSecondMeasure] = useState<string>("");

    const formatDate = (inputDate: string): string => {
        let formattedInput = inputDate.replace(/\D/g, "");

        switch (formattedInput.length) {
            case 1:
                formattedInput = /^([0-3])$/.test(formattedInput)
                    ? `${formattedInput}`
                    : "";
                break;

            case 2:
                formattedInput = /^(0[1-9]|[12][0-9]|3[01])$/.test(
                    formattedInput
                )
                    ? `${formattedInput}`
                    : formattedInput.slice(0, 1);
                break;

            case 3:
                formattedInput = /^([01])/.test(formattedInput.slice(2, 3))
                    ? `${formattedInput.slice(0, 2)}/${formattedInput.slice(2)}`
                    : `${formattedInput.slice(0, 2)}`;
                break;

            case 4:
                formattedInput = /^(0[1-9]|1[0-2])/.test(
                    formattedInput.slice(2, 4)
                )
                    ? `${formattedInput.slice(0, 2)}/${formattedInput.slice(2)}`
                    : `${formattedInput.slice(0, 2)}/${formattedInput.slice(2, 3)}`;
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
                formattedInput = /^(20[2-9][4-9]|21[0-9][0-9])/.test(
                    formattedInput.slice(4, 8)
                )
                    ? `${formattedInput.slice(0, 2)}/${formattedInput.slice(2, 4)}/${formattedInput.slice(4)}`
                    : `${formattedInput.slice(0, 2)}/${formattedInput.slice(2, 4)}/${formattedInput.slice(4, 7)}`;
                break;

            default:
                break;
        }

        return formattedInput;
    };

    const handleDate = (inputDate: string) => {
        setDate(formatDate(inputDate));
    };

    const handlePost = () => {
        if (
            date.length === 10 &&
            firstMeasure.length >= 2 &&
            secondMeasure.length >= 2
        ) {
            const measure = `${firstMeasure} x ${secondMeasure}`;
            onPost(date, measure);
            onClose();
        } else {
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
                        <TextInputContainer>
                            <Txt>Medida:</Txt>
                            <Input
                                placeholder="120"
                                onChangeText={(text) => setFirstMeasure(text)}
                                value={firstMeasure}
                                maxLength={3}
                                size="SMALL"
                            />
                            <Txt> x</Txt>
                            <Input
                                placeholder="80"
                                onChangeText={(text) => setSecondMeasure(text)}
                                value={secondMeasure}
                                maxLength={3}
                                size="SMALL"
                            />
                        </TextInputContainer>
                        <BottomContainer>
                            <ButtonsContainer>
                                <Button type="CANCEL" onPress={onClose}>
                                    <ButtonText type="CANCEL">
                                        Cancelar
                                    </ButtonText>
                                </Button>
                                <Button type="ADD">
                                    <ButtonText type="ADD" onPress={handlePost}>
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
