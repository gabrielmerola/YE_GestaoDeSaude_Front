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
`;

export const Button = styled.TouchableOpacity`
    width: 50%;
    margin: 10px 0 10px 0;
`;
