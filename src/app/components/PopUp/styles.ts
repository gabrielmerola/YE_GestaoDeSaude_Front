import { Modal, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonColor = "ADD" | "CANCEL";
export type InputSize = "SMALL" | "LARGE";

type ButtonProps = {
    type: ButtonColor;
};

type InputProps = {
    size: InputSize;
};

export const Container = styled(Modal).attrs({
    transparent: true,
    animationType: "slide"
})`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ModalContainer = styled.View`
    flex: 1;
    padding: 16px;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
`;
export const PopUpContainer = styled.View`
    height: 47%;
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 8px;
    padding: 20px 16px;
   
`;

export const TextInputContainer = styled.View`
    flex: 1;
    align-items: center;
    flex-direction: row;
`;

export const BottomContainer = styled.View`
    flex: 1;
    flex-direction: column-reverse;
`;

export const ButtonsContainer = styled.View`
    flex-direction: row;
    justify-content: center;
`;

export const Title = styled.Text`
    text-align: center;
    ${({ theme }) => `
        font-size: ${theme.FONT_SIZE.XL};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
    color: black;
    margin-bottom: 16px;
`;

export const Txt = styled.Text`
    ${({ theme }) => `
        font-size: ${theme.FONT_SIZE.XL};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
    width: auto;
    color: black;
    margin-right: 10px;
    margin-bottom: 32px;
`;

export const Button = styled(TouchableOpacity)<ButtonProps>`
    flex: 1;
    min-height: 56px;
    background-color: ${({ theme, type }) =>
        type === "ADD" ? theme.COLORS.GREEN_700 : theme.COLORS.GRAY_400};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin: 0 8px;
`;

export const ButtonText = styled.Text<ButtonProps>`
    ${({ theme }) => `
        font-size: ${theme.FONT_SIZE.XL};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
    color: ${({ theme, type }) =>
        type === "ADD" ? theme.COLORS.WHITE : "black"};
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
    placeholderTextColor: theme.COLORS.GRAY_400,
    fontFamily: theme.FONT_FAMILY.REGULAR,
    cursorColor: "black",
    keyboardType: "numeric"
}))<InputProps>`
    width: ${({ size }) => (size === "SMALL" ? "21%" : "50%")};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG};
    height: 40px;
    border-radius: 8px;
    padding: 0 16px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 32px;
`;
