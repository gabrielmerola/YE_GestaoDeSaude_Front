import { css } from "styled-components";
import styled from "styled-components/native";

export type CellColor = "green" | "gray" | "dark-gray";

type Props = {
    type: CellColor;
};

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
    height: 76px;
    background-color: ${({ theme, type }) =>
        type === "gray"
            ? theme.COLORS.GRAY_300
            : type === "green"
              ? theme.COLORS.GREEN_700
              : theme.COLORS.GRAY_400};
`;
export const CellText = styled.Text<Props>`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
    color: ${({ theme, type }) =>
        type === "gray" ? "black" : theme.COLORS.WHITE};
`;

export const Separator = styled.View`
    height: 1px;
    background-color: white;
`;
