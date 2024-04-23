import styled from "styled-components/native";

export const TextTitle = styled.Text`
    font-weight: normal;
    font-size: 22px;
    margin: 40px 30px 12px 30px;
    align-self: flex-start;
`;

export const TextSubtitleWhite = styled.Text`
    font-weight: normal;
    color: white;
    font-size: 18px;
    margin: 30px 30px 30px;
    align-self: center;
`;

export const TextNotificationWhite = styled.Text`
    font-weight: normal;
    color: white;
    font-size: 14px;
    align-self: center;
    margin-bottom: 10px;
`;

export const ViewCard = styled.View`
    width: 90%;
    background-color: ${({ theme }) => theme.COLORS.GREEN_400};
    border-radius: 8px;
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
    margin-bottom: 20px;
    margin-top: 20px;
`;

export const ButtonTextWhite = styled.Text`
    ${({ theme }) => `
        font-size: ${theme.FONT_SIZE.LG};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.WHITE};
    `}
`;
