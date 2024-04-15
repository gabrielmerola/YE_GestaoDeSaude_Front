import styled from "styled-components/native";

export const Text = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.XL};
    padding: 30px;
`;

export const ContainerValidation = styled.View`
    margin-top: 35px;
`;

export const ContainerNewPassword = styled.View`
    align-items: center;
    margin-top: 50px;
`;

export const TextValidationEmail = styled.Text`
    padding-left: 30px;
    font-size: ${({ theme }) => theme.FONT_SIZE.LG};
`;

export const InputEmail = styled.TextInput`
    margin-left: 25px;
    background-color: #d9d9d9;
    margin-top: 5px;
    margin-right: 25px;
    font-size: 18px;
    padding-left: 8px;
    padding-top: 7px;
    padding-bottom: 7px;
    border-radius: 4px;
`;

export const ButtonConfirm = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.GREEN_400};
    padding: 6px 12px 12px 12px;
    border-radius: 15px;
    width: 35%;
    margin-top: 60px;
    bottom: 0;
    border-color: black;
    border-width: 1px;
    align-self: center;
`;

export const ButtonText = styled.Text`
    color: white;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG};
    text-align: center;
    justify-content: center;
`;

export const TextNewPassword = styled.Text`
    margin-top: 30px;
    font-size: ${({ theme }) => theme.FONT_SIZE.LG};
    width: 80%;
`;

export const InputNewPassword = styled.TextInput`
    width: 90%;
    font-size: 18px;
`;

export const TextNewPasswordConfirm = styled.TextInput`
    margin-top: 30px;
    width: 80%;
    font-size: ${({ theme }) => theme.FONT_SIZE.LG};
`;

export const InputNewPasswordConfirm = styled.TextInput`
    width: 90%;
    font-size: 18px;
`;

export const TextPasswordRestricion = styled.Text`
    margin-left: 25px;
    margin-top: 8px;
    color: dimgrey;
    width: 80%;
`;

export const TextRestricion = styled.Text`
    margin-left: 25px;
    color: dimgrey;
    width: 80%;
`;

export const View = styled.View``;

export const Image = styled.Image`
    width: 20px;
    height: 20px;
`;

export const ContainerInput = styled.View`
    background-color: #d9d9d9;
    width: 80%;
    border-radius: 4px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 7px;
`;
