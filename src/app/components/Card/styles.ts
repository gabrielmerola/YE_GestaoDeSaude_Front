import styled from "styled-components/native";


export const Container = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 380px;
    height: 100px;
    padding: 15px;
    margin: 25px;
    border-radius: 18px;    
    background-color: ${({ theme }) => theme.COLORS.RED_100};
    gap: 90px;
`;

export const SecContainer = styled.View`
    width: 140px;
    gap: 10px;    
`;

export const ThirdContainer = styled.View`
    gap: 10px;
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