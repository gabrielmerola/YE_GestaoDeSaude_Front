import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const Container = styled.View`
    width: 90%;
    height: 85%;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.GREEN_700};
    padding: 10px;
    margin-top: 40px;
    border-radius: 10px;
`;

export const FlatListContainer = styled.View`
    flex: 2;
    padding: 0;
    width: 100%;
`;

export const Logon = styled.Image`
    margin-top: 10px;
    align-self: center;
`;

export const Txt = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-top: 10px;
    font-size: ${({ theme }) => theme.FONT_SIZE.LG};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const SecTxt = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const ThirdTxt = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.FONT_SIZE.XL};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const SecTxtCont = styled.View`
    width: 100%;
    margin-bottom: 10px;
`;

export const SubTxt = styled.Text.attrs({
    adjustsFontSizeToFit: true
})`
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-left: 10px;
    font-size: ${({ theme }) => theme.FONT_SIZE.MD};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
