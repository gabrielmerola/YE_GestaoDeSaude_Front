import {
    Button,
    ButtonText,
    AddIconStyled,
    Container,
    ButtonContainer
} from "@components/PopUpAddButton/styles";

type Props = {
    onOpen: () => void;
};

export function PopUpAddButton({ onOpen }: Props) {
    return (
        <Container>
            <Button onPress={onOpen}>
                <ButtonContainer>
                    <AddIconStyled />
                    <ButtonText>Adicionar</ButtonText>
                </ButtonContainer>
            </Button>
        </Container>
    );
}
