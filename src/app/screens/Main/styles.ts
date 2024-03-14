import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 56px;
    margin-top: 40px;
    align-items: center;
    justify-content: center;
    flex: 1;
`;

export const Header = styled.View`
    width: 100%;
    height: 56px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.GREEN_700};
    ${Platform.OS === "ios" ? "padding-top: 100px;" : ""}
`;
