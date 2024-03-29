import styled from "styled-components/native";

export const Container = styled.View`
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GREEN_700};
    gap: 16px;
    justify-content: space-between;
    flex: 1;
    padding: 0 56px 0 56px;
`;

export const SubTitle = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-top: 10px;
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
    padding: 10px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    width: 300px;
    margin-bottom: 10px;
    align-self: center;
`;

export const View = styled.View``;

export const ButtonText = styled.Text`
    color: ${({ theme }) => theme.COLORS.GREEN_300};
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.MD};
`;
