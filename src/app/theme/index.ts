import { extendTheme } from "native-base";

export const THEMES = extendTheme({
    colors: {
        gray: {
            100: "#F0F0F0",
            200: "#D9D9D9",
            300: "#8D8D99",
            400: "#666666",
            500: "#4C4C4C",
            600: "#333333",
            700: "#1A1A1A",
            800: "#000000"
        },
        green: {
            50: "#EAF5F2",
            100: "#D2E8DF",
            200: "#AADCCB",
            300: "#82D0B7",
            400: "#5AC3A4",
            500: "#127856",
            600: "#0F6B4D",
            700: "#0C5F44",
            800: "#739489",
            900: "#507773"
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
