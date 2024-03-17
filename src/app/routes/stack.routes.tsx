import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ConsultationsHeld from "@screens/ConsultationsHeld";
import DetailsConsultationsHeld from "@screens/DetailsConsultationsHeld";
import ExamsDetected from "@screens/ExamsDetected";
import ExamsHeld from "@screens/ExamsHeld";
import ExamsHistory from "@screens/ExamsHistory";
import Glucose from "@screens/Glucose";
import IMC from "@screens/IMC";
import ListConsultationsHeld from "@screens/ListConsultationsHeld";
import Main from "@screens/Main";
import Medicines from "@screens/Medicines";
import NewMedicine from "@screens/NewMedicine";
import Perfil from "@screens/Perfil";
import Pressure from "@screens/Pressure";
import { Image } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

import About from "../screens/About";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes({ navigation }: any) {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    backgroundColor: "#FFFFFF"
                },
                drawerLabelStyle: {
                    color: "#000000",
                    fontSize: 16,
                    fontFamily: "Jost_400Regular",
                    fontWeight: "400",
                    lineHeight: 20
                },
                headerTintColor: "white",
                headerRight: () => (
                    <TouchableOpacity
                        style={{ display: "flex", gap: 10 }}
                        onPress={() => navigation.navigate("Perfil")}
                    >
                        <Image
                            source={require("../../../assets/perfill.png")}
                            alt="Perfil"
                            style={{ width: 30, height: 30, marginRight: 15 }}
                        />
                    </TouchableOpacity>
                )
            }}
        >
            <Drawer.Screen
                name="YE GESTÃO SAÚDE"
                component={Main}
                options={{
                    drawerLabel: "YE GESTÃO DE SAÚDE",
                    drawerIcon: () => (
                        <Image
                            source={require("../../../assets/logom.png")}
                            alt="Logo"
                            style={{ width: 24, height: 24 }}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: "#739489"
                    },
                    title: ""
                }}
            />
            <Drawer.Screen
                name="Exames"
                component={ExamsHistory}
                options={{
                    drawerLabel: "Exames",
                    drawerIcon: () => (
                        <Image
                            source={require("../../../assets/exames.png")}
                            alt="Exams"
                            style={{ width: 24, height: 24 }}
                        />
                    ),
                    headerTransparent: true,
                    title: "",
                    headerShown: false
                }}
            />
            <Drawer.Screen
                name="Consultas"
                component={ConsultationsHeld}
                options={{
                    drawerLabel: "Consultas",
                    drawerIcon: () => (
                        <Image
                            source={require("../../../assets/consultas.png")}
                            alt="Consultas"
                            style={{ width: 24, height: 24 }}
                        />
                    ),
                    headerTransparent: true,
                    title: "",
                    headerShown: false
                }}
            />
            <Drawer.Screen
                name="Medicamentos"
                component={Medicines}
                options={{
                    drawerLabel: "Medicamentos",
                    drawerIcon: () => (
                        <Image
                            source={require("../../../assets/medicamentos.png")}
                            alt="Medicamentos"
                            style={{ width: 24, height: 24 }}
                        />
                    ),
                    headerTransparent: true,
                    title: "",
                    headerShown: false
                }}
            />
        </Drawer.Navigator>
    );
}

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerTitle: "",
                    headerShown: false
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Perfil" component={Perfil} />
                <Stack.Screen name="Drawer" component={DrawerRoutes} />
                <Stack.Screen name="Pressure" component={Pressure} />
                <Stack.Screen name="Glucose" component={Glucose} />
                <Stack.Screen name="IMC" component={IMC} />
                <Stack.Screen name="Medicines" component={Medicines} />
                <Stack.Screen name="NewMedicine" component={NewMedicine} />
                <Stack.Screen
                    name="ConsultationsHeld"
                    component={ConsultationsHeld}
                />
                <Stack.Screen
                    name="ListConsultationsHeld"
                    component={ListConsultationsHeld}
                />
                <Stack.Screen
                    name="DetailsConsultationsHeld"
                    component={DetailsConsultationsHeld}
                />
                <Stack.Screen name="ExamsHistory" component={ExamsHistory} />
                <Stack.Screen name="ExamsHeld" component={ExamsHeld} />
                <Stack.Screen name="ExamsDetected" component={ExamsDetected} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
