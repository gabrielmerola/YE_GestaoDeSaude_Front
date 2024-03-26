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

export const ImageIcon = styled.Image`
    width: 35px;
    height: 35px;
`;
