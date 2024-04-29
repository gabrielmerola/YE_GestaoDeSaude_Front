import "react-native-gesture-handler";
import { Loading } from "@components/Loading";
import {
    useFonts,
    Jost_400Regular,
    Jost_700Bold
} from "@expo-google-fonts/jost";
import Routes from "@routes/index";
import { NativeBaseProvider, StatusBar } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContextProvider } from "src/app/context/auth_context";
import { ThemeProvider } from "styled-components";

import theme from "./src/app/theme";

export default function App() {
    const [fontsLoaded] = useFonts({ Jost_400Regular, Jost_700Bold });

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NativeBaseProvider>
                <ThemeProvider theme={theme}>
                    <StatusBar
                        barStyle="light-content"
                        backgroundColor="transparent"
                        translucent
                    />
                    <AuthContextProvider>
                        {fontsLoaded ? <Routes /> : <Loading />}
                    </AuthContextProvider>
                </ThemeProvider>
            </NativeBaseProvider>
        </SafeAreaView>
    );
}
