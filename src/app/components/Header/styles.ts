import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 56px;
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GREEN_700};
    ${Platform.OS === "ios" &&
    `
        margin-top: 30px;`}
`;

export const TxtContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    margin-right: 56px;
`;

export const Txt = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.FONT_SIZE.XL};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const View = styled.View`
    width: 100%;
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
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
