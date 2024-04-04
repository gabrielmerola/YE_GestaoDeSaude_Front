import { InputField } from "@components/InputField";
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
    flex: 1;
    flex-direction: column-reverse;
    justify-content: space-between;
    background-color: white;
`;

export const TableContainer = styled.View`
    flex: 1;
    background-color: white;
    flex-direction: column;
`;

export const ResumeContainer = styled.View`
    flex: 1;
    background-color: ${({ theme }) => `${theme.COLORS.GRAY_400}`};
`;

export const InputContainer = styled.View`
    background-color: white;
    flex-direction: row;
`;

export const ConsultationsDataHeader = styled.View`
    width: 100%;
    height: 56px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.GREEN_700};
`;

export const ConsultationsDataHeaderTitle = styled.Text`
    ${({ theme }) => `
        font-size: ${theme.FONT_SIZE.XL};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.WHITE};
    `}
`;

export const ResumeTxt = styled.Text`
    ${({ theme }) => `
        font-size: ${theme.FONT_SIZE.LG};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
    color: black;
    margin: 16px;
`;

export const InputTitle = styled.Text`
    ${({ theme }) => `
        font-size: ${theme.FONT_SIZE.LG};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
    color: black;
    margin: 16px;
`;
export const BigInput = styled.TextInput.attrs(({ theme }) => ({
    placeholderTextColor: theme.COLORS.GRAY_400,
    fontFamily: theme.FONT_FAMILY.REGULAR,
    cursorColor: "black",
    multiline: true,
    numberOfLines: 5,
    textAlignVertical: "top",
    maxLength: 200
}))`
    width: 100%;
    font-size: ${({ theme }) => theme.FONT_SIZE.LG};
    height: 150px;
    border: 1px solid black;
    border-radius: 8px;
    padding: 16px 16px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    margin-top: 16px;
`;

export const Input = styled(InputField).attrs(({ theme }) => ({
    placeholderTextColor: theme.COLORS.GRAY_400,
    fontFamily: theme.FONT_FAMILY.REGULAR,
    multiline: true,
    numberOfLines: 5,
    textAlignVertical: "top"
}))``;
