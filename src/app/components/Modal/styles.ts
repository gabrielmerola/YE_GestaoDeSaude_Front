import styled from "styled-components/native";

export const TextTitle = styled.Text`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 12px;
    align-self: center;
`;

export const Text = styled.Text`
    font-weight: bold;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ViewContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ViewContent = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const ViewCard = styled.View`
    width: 80%;
    padding: 20px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 8px;
`;

export const Button = styled.TouchableOpacity`
    width: 48%;
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    margin-right: 5px;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    height: 50px;
    border-radius: 10px;
`;

export const ButtonConfirm = styled.TouchableOpacity`
    width: 48%;
    background-color: ${({ theme }) => theme.COLORS.RED_100};
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    margin-top: 20px;
    height: 50px;
    border-radius: 10px;
`;

export const ButtonAdd = styled.TouchableOpacity`
    flex: 1;
    min-height: 50px;
    max-height: 50px;
    min-width: 150px;
    max-width: 150px;
    background-color: ${({ theme }) => theme.COLORS.RED_100};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin: 0 8px;
`;

export const ButtonTextWhite = styled.Text`
    ${({ theme }) => `
        font-size: ${theme.FONT_SIZE.LG};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.WHITE};
    `}
`;

export const ButtonTextBlack = styled.Text`
    ${({ theme }) => `
        font-size: ${theme.FONT_SIZE.LG};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.BLACK};
    `}
`;
