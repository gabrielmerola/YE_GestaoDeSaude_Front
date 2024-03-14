import { NativeBaseProvider, StatusBar } from "native-base";
import Routes from "@routes/stack.routes";
import theme from "./src/app/theme";
import { ThemeProvider } from "styled-components";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    return (
        <SafeAreaView style={{flex: 1}}>
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
        </SafeAreaView>
    );
}
