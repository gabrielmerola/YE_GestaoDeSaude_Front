import { Text } from "native-base";
import { TouchableOpacity } from "react-native";
import theme from "src/app/theme";
import styled from "styled-components/native";

export const StyledButton = styled(TouchableOpacity)<{
    autoSize: boolean;
    color?: string;
}>`
    width: ${({ autoSize }) => (autoSize ? "auto" : "100%")};
    margin-top: 30px;
    background-color: ${({ color }) => color || theme.COLORS.GREEN_700};
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

export const ButtonText = styled(Text)`
    color: white;
`;
