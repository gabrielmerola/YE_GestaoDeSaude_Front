import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 56px;
    margin-top: 40px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.GREEN_700};
`;

