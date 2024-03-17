import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screens/Register";
import Login from "../screens/Login";
import Home from "../screens/Home";
import About from "../screens/About";
import Main from "@screens/Main";
import Pressure from "@screens/Pressure";
import Glucose from "@screens/Glucose";
import IMC from "@screens/IMC";
import Medicines from "@screens/Medicines";
import NewMedicine from "@screens/NewMedicine";
import ConsultationsHeld from "@screens/ConsultationsHeld";
import ListConsultationsHeld from "@screens/ListConsultationsHeld";
import DetailsConsultationsHeld from "@screens/DetailsConsultationsHeld";
import ExamsHistory from "@screens/ExamsHistory";
import ExamsDetected from "@screens/ExamsDetected";
import ExamsHeld from "@screens/ExamsHeld";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="ExamsHistory"
                screenOptions={{
                    headerTitle: "",
                    headerShown: false
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Main" component={Main} />
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
