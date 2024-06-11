import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: space-between;
`;

export const TextContainer = styled.View`
    flex: 1;
    align-items: center;
    margin-top: 64px;
`;

export const Txt = styled.Text`
    ${({ theme }) => `
        font-size: ${theme.FONT_SIZE.LG};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.BLACK};
    `}
    text-align: center;
    padding: 32px;
`;