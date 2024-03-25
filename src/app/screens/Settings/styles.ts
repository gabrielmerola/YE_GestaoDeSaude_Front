import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
    border-radius: 4px;
    background-color: ${({ theme }) => theme.COLORS.GREEN_700};
    padding: 15px;
    margin-top: 25px;
    margin-left: 10px;
    margin-right: 10px;
    flex-direction: row;
    justify-content: space-between;
`;

export const ButtonText = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.FONT_SIZE.XL};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    margin-left: 10px;
    justify-content: center;
`;

export const Image = styled.Image`
    width: 30px;
    height: 30px;
`;

export const ImageData = styled.Image`
    color: ${({ theme }) => theme.COLORS.GREEN_700};
    width: 40px;
    height: 40px;
`;

export const Txt = styled.Text`
    color: black;
    margin-top: 40px;
    font-size: 25px;
`;

export const TextContact = styled.Text`
    color: black;
    font-size: 20px;
`;

export const SecContainer = styled.View`
    width: 100%;
    margin-top: 20px;
    font-size: ${({ theme }) => theme.FONT_SIZE.LG};
    flex-direction: row;
    align-items: center;
    gap: 30px;
`;

export const Container = styled.View`
    margin-left: 30px;
    margin-top: 20px;
`;

export const ImageIcon = styled.Image`
    width: 25px;
    height: 30px;
`;
