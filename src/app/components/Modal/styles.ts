import styled from "styled-components/native";

export const TextTitle = styled.Text`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 12px;
    align-self: center;
`;

export const TextSubtitle = styled.Text`
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.GREEN_400};
    font-size: 16px;
    margin-bottom: 12px;
`;

export const Text = styled.Text`
    font-weight: bold;
    font-size: 16;
    color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ViewContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ViewContent = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const ViewCard = styled.View`
    width: 80%;
    padding: 20px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 8px;
`;

export const Button = styled.TouchableOpacity`
    width: 48%;
    background-color:
        rgba 0,
        0,
        0,
        0.1;
    margin-right: 5px;
    margin-top: 24px;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-radius: 50px;
`;

export const ButtonConfirm = styled.TouchableOpacity`
    width: 48%;
    background-color: ${({ theme }) => theme.COLORS.GREEN_400};
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    margin-top: 24px;
    height: 40px;
    border-radius: 50px;
`;

export const ButtonAdd = styled.TouchableOpacity`
    width: 50px;
    background-color: #739489;
    justify-content: center;
    align-items: center;
    height: 50px;
    border-radius: 50px;
`;

export const ButtonTextWhite = styled.Text`
    color: white;
    font-size: ${({ theme }) => theme.FONT_SIZE.LG};
`;

export const ButtonTextBlack = styled.Text`
    color: black;
    font-size: ${({ theme }) => theme.FONT_SIZE.LG};
`;
