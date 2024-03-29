import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: auto;
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GREEN_700};
    padding: 15px;
    ${Platform.OS === "ios" &&
    `
        margin-top: 30px;`}
`;

export const Txt = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.FONT_SIZE.XL};
    text-align: center;
    padding-right: 90px;
    width: 100%;
`;

export const View = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
    left: 0;
`;

export const Ball = styled.View`
    width: 40px;
    height: 40px;
    border-radius: 25px;
    background-color: ${({ theme }) => theme.COLORS.GREEN_400};
    position: absolute;
    z-index: -1;
`;
