import styled from "styled-components/native";

export const TextTitle = styled.Text`
    font-weight: bold;
    font-size: 26px;
    margin: 40px 30px 12px 30px;
    align-self: flex-start;
`;

export const TextSubtitle = styled.Text`
    font-weight: normal;
    color: black;
    font-size: 20px;
    align-self: flex-start;
    margin-left: 25px;
    margin-bottom: 40px;
    margin-top: 20px;
`;

export const TextNormal = styled.Text`
    font-weight: normal;
    font-size: 20px;
    color: black;
    align-self: flex-start;
    margin: 20px 25px 40px 25px;
`;

export const Icon = styled.Text`
    margin-left: 30px;
    margin-top: 16px;
`;

export const Button = styled.TouchableOpacity`
    min-height: 50px;
    max-height: 50px;
    min-width: 160px;
    max-width: 160px;
    background-color: ${({ theme }) => theme.COLORS.GREEN_700};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-right: 22px;
`;

export const ButtonTextWhite = styled.Text`
    ${({ theme }) => `
        font-size: ${theme.FONT_SIZE.LG};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.WHITE};
    `}
`;
