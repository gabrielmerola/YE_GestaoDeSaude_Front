import styled from "styled-components/native";

export const Txt = styled.Text`
    color: black;
    font-size: ${({ theme }) => theme.FONT_SIZE.XL};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    margin-left: 18px;
    margin-top: 27px;
    margin-right: 18px;
`;

export const Container = styled.View`
    width: 100%;
`;

export const Input = styled.TextInput`
    margin-left: 25px;
    background-color: #d9d9d9;
    margin-top: 28px;
    margin-right: 25px;
    font-size: 20px;
    padding-left: 8px;
    padding-top: 7px;
    padding-bottom: 7px;
    border-radius: 4px;
`;

export const Text = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD};
    margin-left: 33px;
    margin-top: 31px;
`;

export const ButtonConfirm = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.GREEN_400};
    padding: 6px 12px 12px 12px;
    border-radius: 15px;
    width: 35%;
    margin-left: 200px;
    margin-bottom: 12px;
    margin-top: 60px;
    bottom: 0;
    border-color: black;
    border-width: 1px;
`;

export const ButtonText = styled.Text`
    color: white;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG};
    text-align: center;
    justify-content: center;
`;

export const ViewWrapper = styled.View`
    flex: 1;
`;

export const View = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const TouchableOpacity = styled.TouchableOpacity`
    margin-left: 21px;
    margin-right: 77px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;

export const Image = styled.Image`
    margin-top: 30px;
`;
