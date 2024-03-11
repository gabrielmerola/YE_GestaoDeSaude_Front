import { extendTheme } from "native-base";

export const THEMES = extendTheme({
    colors: {
        gray: {
            300: "#8D8D99"
        },
        green: {
            500: "#127856",
            800: "#739489"
        },
        white: "#fff",
        black: "#000"
    },
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
        xl: 24
    }
});
