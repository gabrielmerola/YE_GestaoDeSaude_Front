import styled from "styled-components/native";

export const TextTitle = styled.Text`
    font-weight: bold;
    font-size: 26px;
    margin-bottom: 20px;
    margin-top: 20px;
    align-self: center;
`;

export const TextSubtitleWhite = styled.Text`
    font-weight: normal;
    color: white;
    font-size: 16px;
    margin: 10px 50px 10px 20px;
    align-self: flex-start;
`;

export const TextSubtitleWhiteHour = styled.Text`
    font-weight: normal;
    color: white;
    font-size: 16px;
    margin: 10px 158px;
`;

export const TextNotificationWhite = styled.Text`
    font-weight: normal;
    color: white;
    font-size: 14px;
    align-self: flex-start;
    margin: 10px 20px 5px;
`;

export const ViewCard = styled.View`
    width: 90%;
    background-color: ${({ theme }) => theme.COLORS.GREEN_400};
    border-radius: 8px;
`;

export const Button = styled.TouchableOpacity`
    width: 90%;
    height: 40px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin-bottom: 15px;
    margin-top: 10px;
`;

export const ButtonTextWhite = styled.Text`
    ${({ theme }) => `
        font-size: ${theme.FONT_SIZE.LG};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GREEN_700};
    `}
`;
