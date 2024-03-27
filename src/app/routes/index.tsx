import { AuthContext } from "@contexts/authContext";
import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";

import AuthRoutes from "./auth.routes";
import StackRoutes from "./stack.routes";

export default function Routes() {
    const contextData = useContext(AuthContext);
    console.log("USUÁRIO LOGADO =>", contextData);

    return (
        <NavigationContainer>
            <AuthRoutes />
        </NavigationContainer>
    );
}
