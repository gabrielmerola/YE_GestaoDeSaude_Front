import { ButtonText, StyledButton } from "./styles";

interface ButtonProps {
    children: React.ReactNode;
    autoSize?: boolean;
    color?: string;
    onPress?: () => void;
}

export function Button({
    children,
    autoSize = false,
    color,
    ...rest
}: ButtonProps) {
    return (
        <StyledButton autoSize={autoSize} color={color} {...rest}>
            <ButtonText>{children}</ButtonText>
        </StyledButton>
    );
}
