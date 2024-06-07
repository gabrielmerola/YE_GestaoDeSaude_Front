import styled from "styled-components/native";

export const ButtonOut = styled.TouchableOpacity`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    min-width: 168px;
    max-width: 168px;
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