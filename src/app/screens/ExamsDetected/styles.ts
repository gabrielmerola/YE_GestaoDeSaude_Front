import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const View = styled.View`
    flex: 1;
    padding: 16px;
    background-color: white;
`;

export const FlatListStyled = styled.FlatList`
    max-height: 256px;
`;

export const Button = styled(TouchableOpacity)`
    width: 50%;
    height: 8%;
    background-color: ${({ theme }) => theme.COLORS.GREEN_700};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-left: 25%;
    margin-bottom: 10%;
    top: 70%;
    position: fixed;
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    ${({ theme }) => `
        font-size: ${theme.FONT_SIZE.XL};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.WHITE};
    `}
`;
