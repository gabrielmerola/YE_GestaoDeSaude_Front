import { NativeBaseProvider, StatusBar } from "native-base";
import Routes from "@routes/stack.routes";
import theme from './src/app/theme'
import { ThemeProvider } from "styled-components";
import { useFonts, Jost_400Regular, Jost_700Bold } from '@expo-google-fonts/jost'
import { Loading } from "@components/Loading";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    const [fontsLoaded] = useFonts({ Jost_400Regular, Jost_700Bold })

    return (
        <SafeAreaView style={{flex:1}}>
            <NativeBaseProvider>
                <ThemeProvider theme={theme}>
                    <StatusBar
                        barStyle="light-content"
                        backgroundColor="transparent"
                        translucent
                    />
                    {fontsLoaded ? <Routes /> : <Loading />}
                </ThemeProvider>
            </NativeBaseProvider>
        </SafeAreaView>
    );
}
