import styled from "styled-components/native";

export const MedicineButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 8px;
    border-bottom-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Txt = styled.Text`
    font-size: 20px;
    margin-top: 5px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const MedicineView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const Input = styled.TextInput`
    width: 100%;
    text-align: left;
`;
