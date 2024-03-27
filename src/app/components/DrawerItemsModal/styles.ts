import { Modal } from "react-native";
import styled from "styled-components/native";

export const ModalContainer = styled(Modal).attrs({
    transparent: true,
    animationType: "slide"
})``;

export const View = styled.View`
    flex: 1;
    padding: 16px;
    background-color: white;
`;
