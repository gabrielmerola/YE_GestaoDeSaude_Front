import { ButtonText, StyledButton } from "./styles";

interface ButtonProps {
    children: React.ReactNode;
    autoSize?: boolean;
    color?: string;
    onPress?: () => void;
    style?: any;
}

export function Button({
    children,
    autoSize = false,
    color,
    style,
    ...rest
}: ButtonProps) {
    return (
        <StyledButton style={style} autoSize={autoSize} color={color} {...rest}>
            <ButtonText>{children}</ButtonText>
        </StyledButton>
    );
}
