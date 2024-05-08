import "react-native-gesture-handler";
import { Loading } from "@components/Loading";
import { BloodPressureContextProvider } from "@context/blood-pressure-context";
import { GlucoseContextProvider } from "@context/glucose_context";
import { ImcContextProvider } from "@context/imc_context";
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
                        barStyle="dark-content"
                        backgroundColor="transparent"
                        translucent
                    />
                    <BloodPressureContextProvider>
                        <GlucoseContextProvider>
                            <ImcContextProvider>
                                <AuthContextProvider>
                                    {fontsLoaded ? <Routes /> : <Loading />}
                                </AuthContextProvider>
                            </ImcContextProvider>
                        </GlucoseContextProvider>
                    </BloodPressureContextProvider>
                </ThemeProvider>
            </NativeBaseProvider>
        </SafeAreaView>
    );
}
