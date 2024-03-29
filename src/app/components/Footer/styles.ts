import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 56px;
    margin-top: -40px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    background-color: ${({ theme }) => theme.COLORS.GREEN_700};
`;

export const Txt = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM};
    margin-right: 25px;
`;
