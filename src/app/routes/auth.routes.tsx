import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "@screens/About";
import Home from "@screens/Home";
import Login from "@screens/Login";
import Register from "@screens/Register";
import Security from "@screens/Security";

import DrawerRoutes from "./drawer.routes";
import StackRoutes from "./stack.routes";

type AuthRoutes = {
    Home: undefined;
    About: undefined;
    Login: undefined;
    Register: undefined;
};

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {
    return (
        <NavigationContainer>
            <AuthStack.Navigator
                initialRouteName="StackRoutes"
                screenOptions={{
                    headerTitle: "",
                    headerShown: false
                }}
            >
                <AuthStack.Screen name="Home" component={Home} />
                <AuthStack.Screen name="About" component={About} />
                <AuthStack.Screen name="Login" component={Login} />
                <AuthStack.Screen name="Register" component={Register} />
                <AuthStack.Screen name="StackRoutes" component={StackRoutes} />
            </AuthStack.Navigator>
        </NavigationContainer>
    );
}
