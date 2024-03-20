import styled from "styled-components/native";

export const Container = styled.View`
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GREEN_700};
    gap: 16px;
    flex: 1;
    padding: 60px 56px 0 56px;
`;

export const SubTitle = styled.Text`
    margin-top: 50px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 32px;
`;

export const Txt = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG};
`;

export const Button = styled.TouchableOpacity`
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 10px;
    width: 300px;
    align-self: center;
`;

export const ButtonText = styled.Text`
    color: ${({ theme }) => theme.COLORS.GREEN_300};
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.MD};
`;
