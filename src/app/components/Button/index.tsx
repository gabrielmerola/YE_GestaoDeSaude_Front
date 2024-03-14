import { Button, IButtonProps } from "native-base";
import { ReactNode } from "react";
import theme from "src/app/theme";

interface ButtonProps extends IButtonProps {
    children: ReactNode;
    autoSize?: boolean;
    color?: string;
}

export function Buton({
    children,
    autoSize = false,
    color,
    ...rest
}: ButtonProps) {
    return (
        <Button
            w={autoSize ? "auto" : "100%"}
            mt={10}
            bg={theme.COLORS.GREEN_700}
            borderRadius="lg"
            _text={{ color: "white" }}
            {...rest}
        >
            {children}
        </Button>
    );
}
