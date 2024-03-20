import styled from "styled-components/native";

export const AddButton = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.GREEN_400};
    padding: 6px 12px 12px 12px;
    border-radius: 14px;
    width: 35%;
    align-self: center;
    align-items: center;
    margin-bottom: 12px;
    bottom: 0;
    position: absolute;
`;

export const PlusText = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.LG};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    text-align: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    color: white;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD};
    text-align: center;
    justify-content: center;
`;
