import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    background-color: ${({ theme }) => theme.COLORS.GREEN_700};
`;

export const ButtonStyled = styled.TouchableOpacity`
    height: 8%;
`;

export const Txt = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM};
    margin-right: 10%;
`;
