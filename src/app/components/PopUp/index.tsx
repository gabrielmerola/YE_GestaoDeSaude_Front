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
    const [measure, setMeasure] = useState<string>("");

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
                                onChangeText={(text) => setDate(text)}
                            />
                        </TextInputContainer>
                        <TextInputContainer>
                            <Txt>Medida:</Txt>
                            <Input
                                placeholder="120x80"
                                onChangeText={(text) => setMeasure(text)}
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
                                    <ButtonText
                                        type="ADD"
                                        onPress={() => {
                                            onClose();
                                            onPost(date, measure);
                                        }}
                                    >
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
