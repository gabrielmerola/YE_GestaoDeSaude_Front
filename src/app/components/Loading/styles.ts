import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
    color: theme.COLORS.GREEN_300,
    size: "large"
}))`
    margin-top: 32px;
`;

export const LoadIndicatorWhite = styled.ActivityIndicator.attrs(({ theme }) => ({
    color: theme.COLORS.WHITE,
    size: "large"
}))`
`;