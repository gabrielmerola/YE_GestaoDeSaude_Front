import Platform from "react";
import styled from "styled-components/native";

export const ImageData = styled.Image`
    color: ${({ theme }) => theme.COLORS.GREEN_700};
    width: 40px;
    height: 40px;
`;

export const Txt = styled.Text`
    color: black;
    margin-top: 40px;
    font-size: 25px;
`;

export const TextContact = styled.Text`
    color: black;
    font-size: 20px;
`;

export const SecContainer = styled.View`
    width: 100%;
    margin-top: 20px;
    font-size: ${({ theme }) => theme.FONT_SIZE.LG};
    flex-direction: row;
    align-items: center;
    gap: 30px;
`;

export const FooterContact = styled.View`
    background-color: ${({ theme }) => theme.COLORS.GREEN_700};
    height: 100px;
    margin-top: 70%;
`;

export const TextData = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.SM};
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-top: 13px;
`;

export const Text = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding-left: 5px;
    margin-top: 12px;
    margin-bottom: 17px;
`;
