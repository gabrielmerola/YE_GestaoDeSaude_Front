import { Text, ITextProps } from "native-base";
import { ReactNode } from "react";
import theme from "src/app/theme";

interface TitleProps extends ITextProps {
    children: ReactNode;
}

export function Title({ children, ...rest }: TitleProps) {
    return (
        <Text
            fontSize="2xl"
            fontWeight="bold"
            color={theme.COLORS.GREEN_700}
            textAlign="center"
            {...rest}
        >
            {children}
        </Text>
    );
}
