import AuthRoutes from "./auth.routes";
import { useAuth } from "../../app/hooks/useAuth";

export default function Routes() {
    const { user } = useAuth();

    console.log("USUÁRIO LOGADO =>", user);

    return <AuthRoutes />;
}
