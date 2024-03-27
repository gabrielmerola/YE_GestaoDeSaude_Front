import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerRoutes from "@routes/drawer.routes";
import ConsultationsHeld from "@screens/ConsultationsHeld";
import DetailsConsultationsHeld from "@screens/DetailsConsultationsHeld";
import ExamsDetected from "@screens/ExamsDetected";
import ExamsHeld from "@screens/ExamsHeld";
import ExamsHistory from "@screens/ExamsHistory";
import Glucose from "@screens/Glucose";
import IMC from "@screens/IMC";
import ListConsultationsHeld from "@screens/ListConsultationsHeld";
import Medicines from "@screens/Medicines";
import NewMedicine from "@screens/NewMedicine";
import Perfil from "@screens/Perfil";
import Pressure from "@screens/Pressure";

import AuthRoutes from "./auth.routes";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitle: "",
                headerShown: false
            }}
        >
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
    );
}
