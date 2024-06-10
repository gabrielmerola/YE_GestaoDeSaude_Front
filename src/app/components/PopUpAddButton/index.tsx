import {
    Button,
    ButtonText,
    AddIconStyled,
    DeleteIconStyled,
    Container,
    LeftContainer,
    RightContainer,
    ButtonContainer
} from "@components/PopUpAddButton/styles";
import { TouchableOpacity } from "react-native";

type Props = {
    onOpen: () => void;
    onDelete?: () => void;
};

export function PopUpAddButton({ onOpen, onDelete }: Props) {
    return (
        <Container>
            <LeftContainer>
                {onDelete && (
                    <TouchableOpacity>
                        <DeleteIconStyled />
                    </TouchableOpacity>
                )}
            </LeftContainer>

            <Button onPress={onOpen}>
                <ButtonContainer>
                    <AddIconStyled />
                    <ButtonText>Adicionar</ButtonText>
                </ButtonContainer>
            </Button>

            <RightContainer>
                {/* Any other objects you want to add on the right side */}
            </RightContainer>
        </Container>
    );
}
