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

export const Container = styled.View`
    margin-left: 30px;
    margin-top: 20px;
`;
