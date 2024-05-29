import styled from "styled-components/native";

export const ButtonOut = styled.TouchableOpacity`
    flex: 1;
    min-height: 50px;
    max-height: 50px;
    min-width: 150px;
    max-width: 150px;
    background-color: ${({ theme }) => theme.COLORS.RED_100};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin: 20px 8px;
`;

export const ButtonTextWhiteOut = styled.Text`
    ${({ theme }) => `
        font-size: ${theme.FONT_SIZE.LG};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.WHITE};
    `}
`;