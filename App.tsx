import { Loading } from "@components/Loading";
import { BloodPressureContextProvider } from "@context/blood-pressure-context";
import { ConsultationContextProvider } from "@context/consultation_context";
import { GlucoseContextProvider } from "@context/glucose_context";
import { ImcContextProvider } from "@context/imc_context";
import {
    Jost_400Regular,
    Jost_700Bold,
    useFonts
} from "@expo-google-fonts/jost";
import Routes from "@routes/index";
import { NativeBaseProvider, StatusBar } from "native-base";
import "react-native-gesture-handler";
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
                    <ImcContextProvider>
                        <GlucoseContextProvider>
                            <BloodPressureContextProvider>
                                <AuthContextProvider>
                                    <ConsultationContextProvider>
                                        {fontsLoaded ? <Routes /> : <Loading />}
                                    </ConsultationContextProvider>
                                </AuthContextProvider>
                            </BloodPressureContextProvider>
                        </GlucoseContextProvider>
                    </ImcContextProvider>
                </ThemeProvider>
            </NativeBaseProvider>
        </SafeAreaView>
    );
}
