import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.GREEN_700};
    padding-top: 6px;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    align-self: center;
`;

export const ButtonText = styled.Text`
    color: white;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG};
    text-align: center;
    align-self: center;
`;

export const Button = styled.TouchableOpacity`
    width: 50%;
    margin: 10px 0 10px 0;
`;

export const ButtonModal = styled.TouchableOpacity`
    width: 48%;
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    margin-right: 5px;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    height: 50px;
    border-radius: 10px;
`;
