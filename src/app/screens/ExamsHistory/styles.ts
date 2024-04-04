import { Modal } from "react-native";
import styled from "styled-components/native";

export const View = styled.View`
    flex: 1;
    padding: 16px;
    background-color: white;
`;

export const ModalContainer = styled(Modal).attrs({
    transparent: true,
    animationType: "slide"
})``;

export const ButtonContainer = styled.View`
    flex-direction: column-reverse;
    justify-content: space-between;
    background-color: white;
`;

export const FlatListStyled = styled.FlatList`
    max-height: 256px;
`;
