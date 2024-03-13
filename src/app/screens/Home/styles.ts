import styled from "styled-components/native";

export const Container = styled.View`
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GREEN_700};
    padding-right: 56px;
    padding-left: 56px;
    gap: 32px;
    padding-top: 120px;
    flex: 1;
`;

export const SubTitle = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 32px;
`;

export const Txt = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD};
`;

export const Button = styled.TouchableOpacity`
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 10px;
    width: 200px;
    align-self: center;
`;

export const ButtonText = styled.Text`
    color: ${({ theme }) => theme.COLORS.GREEN_300};
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.MD};
`;
