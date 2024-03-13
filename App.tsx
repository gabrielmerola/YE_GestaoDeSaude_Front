import { NativeBaseProvider, StatusBar } from "native-base";
import Routes from "@routes/stack.routes";
import theme from './src/app/theme'
import { ThemeProvider } from "styled-components";

export default function App() {
    return (
        <NativeBaseProvider>
            <ThemeProvider theme={theme}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="transparent"
                    translucent
                />
                <Routes />
            </ThemeProvider>
        </NativeBaseProvider>

    );
}
