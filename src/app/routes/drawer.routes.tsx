import { createDrawerNavigator } from "@react-navigation/drawer";
import ConsultationsHeld from "@screens/ConsultationsHeld";
import ExamsHistory from "@screens/ExamsHistory";
import Main from "@screens/Main";
import Medicines from "@screens/Medicines";
import { Image } from "native-base";
import { TouchableOpacity } from "react-native";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes({ navigation }: any) {
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
