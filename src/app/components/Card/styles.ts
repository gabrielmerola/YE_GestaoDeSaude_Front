import styled from "styled-components/native";

export const Container = styled.View<{ $color?: string }>`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 380px;
    height: 100px;
    padding: 15px 30px;
    margin: 25px;
    border-radius: 18px;
    gap: 90px;
    background-color: ${(props) =>
        props.$color == "red"
            ? ({ theme }: any) => theme.COLORS.RED_100
            : (props) =>
                  props.$color == "blue"
                      ? ({ theme }: any) => theme.COLORS.BLUE_100
                      : ({ theme }: any) => theme.COLORS.GREEN_300};
`;

export const SecContainer = styled.View`
    width: 200px;
    gap: 10px;
    align-self: center;
`;

export const ThirdContainer = styled.View`
    gap: 10px;
    align-self: center;
`;

export const BoldText = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.WHITE};
    align-self: center;
`;

export const Txt = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.WHITE};
`;
