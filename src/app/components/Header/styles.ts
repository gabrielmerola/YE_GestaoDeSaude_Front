import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 56px;
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
    margin-right: 60px;
`;

export const View = styled.View`
    width: 100%;
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-right: 50px;
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
