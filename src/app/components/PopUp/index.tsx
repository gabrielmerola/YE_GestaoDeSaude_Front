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
import { useToast } from "native-base";
import { useState } from "react";
import {formatDate} from "@utils/formatDate";

export type popUpType = "PRESSURE" | "GLUCOSE" | "IMC";

interface Props {
    onClose: () => void;
    onPost: (list: object) => void;
    popUpType: popUpType;
}

export default function PopUp({ onClose, onPost, popUpType }: Props) {
    const [date, setDate] = useState<string>("");
    const [firstMeasure, setFirstMeasure] = useState<string>("");
    const [secondMeasure, setSecondMeasure] = useState<string>("");
    const toast = useToast();
    const id = "warning-toast";
    const idSuccess = "success-toast";

    function postToast() {
        if (!toast.isActive(idSuccess)) {
            toast.show({
                id: idSuccess,
                title: "Medida adicionada com sucesso!",
                variant: "top-accent",
                backgroundColor: "green.500",
                placement: "top",
                style: { borderRadius: 10 }
            });
        }
    }

    const handleDate = (inputDate: string) => {
        setDate(formatDate(inputDate));
    };
    const handlePost = () => {
        if (
            (popUpType === "PRESSURE" || popUpType === "IMC") &&
            date.length === 10 &&
            /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(202[4-9]|20[3-9][0-9]|21[0-9][0-9])$/.test(
                date
            ) &&
            firstMeasure.length >= 2 &&
            secondMeasure.length >= 2
        ) {
            const newDate = date.split("/").reverse().join("-");
            let list = {};
            if (popUpType === "PRESSURE") {
                const measure = `${firstMeasure}x${secondMeasure}`;
                list = {
                    date: newDate,
                    measure
                };
            }
            if (popUpType === "IMC") {
                const height = parseInt(firstMeasure);
                const weight = parseInt(secondMeasure);
                list = {
                    date: newDate,
                    height,
                    weight
                };
            }

            onPost(list);
            postToast();
            onClose();
        } else if (
            popUpType === "GLUCOSE" &&
            date.length === 10 &&
            /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(202[4-9]|20[3-9][0-9]|21[0-9][0-9])$/.test(
                date
            ) &&
            firstMeasure.length >= 2
        ) {
            const measure = parseInt(firstMeasure);
            const newDate = date.split("/").reverse().join("-");
            const list = {
                date: newDate,
                measure
            };
            onPost(list);
            postToast();
            onClose();
        } else {
            if (!toast.isActive(id)) {
                toast.show({
                    id,
                    title: "Erro ao adicionar medida.",
                    variant: "top-accent",
                    description: "Preencha os campos corretamente.",
                    backgroundColor: "red.500",
                    placement: "top",
                    style: { borderRadius: 10 }
                });
            }
        }
    };

    return (
        <Container>
            <ModalContainer>
                <PopUpContainer>
                    <Title>Adicionar outra medida?</Title>
                    <TextInputContainer>
                        <Txt>Data:</Txt>
                        <Input
                            placeholder="__/__/____"
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
                    ) : popUpType === "GLUCOSE" ? (
                        <TextInputContainer>
                            <Txt>Medida:</Txt>
                            <Input
                                placeholder="120"
                                onChangeText={(text) => setFirstMeasure(text)}
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
                                        setSecondMeasure(text)
                                    }
                                    value={secondMeasure}
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
                                <ButtonText type="CANCEL">Cancelar</ButtonText>
                            </Button>
                            <Button type="ADD" onPress={handlePost}>
                                <ButtonText type="ADD">Confirmar</ButtonText>
                            </Button>
                        </ButtonsContainer>
                    </BottomContainer>
                </PopUpContainer>
            </ModalContainer>
        </Container>
    );
}
