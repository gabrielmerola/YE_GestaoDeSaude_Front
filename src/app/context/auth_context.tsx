import { AxiosResponse } from "axios";
import { PropsWithChildren, createContext, useState } from "react";

import { AuthRepositoryHttp } from "../api/repositories/auth_repository_http";

type AuthContextType = {
    login: (email: string, password: string) => Promise<object | undefined>;
    signUp: (data: object) => Promise<AxiosResponse | undefined>;
    signUpError: string;
    setSignUpError: (error: string) => void;
};

const defaultAuthContext: AuthContextType = {
    login: async (email: string, password: string) => {
        return {};
    },
    signUp: async (data: object) => {
        return undefined;
    },
    signUpError: "",
    setSignUpError: (error: string) => {}
};

export const AuthContext = createContext<AuthContextType>(defaultAuthContext);

export function AuthContextProvider({ children }: PropsWithChildren) {
    const authRepository = new AuthRepositoryHttp();

    const [signUpError, setSignUpError] = useState("");

    async function login(email: string, password: string) {
        try {
            const response = await authRepository.doLogin(email, password);
            console.log(response.status);
            return response;
        } catch (error: any) {
            console.log(error);
        }
    }

    async function signUp(data: object) {
        try {
            const response = await authRepository.registerClient(data);
            return response;
        } catch (error: any) {
            setSignUpError(error.data);
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider
            value={{ login, signUp, signUpError, setSignUpError }}
        >
            {children}
        </AuthContext.Provider>
    );
}
