import { css } from "styled-components";
import styled from "styled-components/native";

export type CellColor = "green" | "gray";
export type RadiusPosition = "left" | "right" | undefined;

type Props = {
    type: CellColor;
    radiusPosition?: RadiusPosition;
};
export const Txt = styled.Text`
    color: black;
    text-align: center;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.XL};
    margin: 3%;
`;

export const Container = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const Cell = styled.View<Props>`
    flex: 1;
    align-items: center;
    display: inline-block;
    justify-content: center;
    padding: 24px 0;
    background-color: ${({ theme, type }) =>
        type === "gray" ? theme.COLORS.GRAY_300 : theme.COLORS.GREEN_700};
    border-bottom: 10px green;
`;

export const CellText = styled.Text<Props>`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
    color: ${({ theme, type }) =>
        type === "gray" ? "black" : theme.COLORS.WHITE};
`;

export const HeaderCell = styled.View`
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    border-bottom: 10px;
    padding: 4px;
    border-radius: 10px 10px 0px 0px;
`;

export const DataCell = styled.View<Props>`
    flex: 1;
    align-items: center;
    display: inline-block;
    justify-content: center;
    padding: 24px 0;
    background-color: ${({ theme, type }) =>
        type === "gray" ? theme.COLORS.GRAY_300 : theme.COLORS.GREEN_700};
    border-bottom: 10px green;
    ${({ radiusPosition }) =>
        radiusPosition === "right"
            ? "border-radius: 0px 0px 0px 10px;"
            : radiusPosition === "left"
              ? "border-radius: 0px 0px 10px 0px;"
              : ""}
`;

export const DatePickerContainer = styled.View`
    flex: 1;
`;
