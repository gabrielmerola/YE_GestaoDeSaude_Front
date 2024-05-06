import { AuthRepositoryHttp } from "@api/repositories/auth_repository_http";
import { AxiosResponse } from "axios";
import { PropsWithChildren, createContext, useState } from "react";

type AuthContextType = {
    login: (email: string, password: string) => Promise<object | undefined>;
    signUp: (data: object) => Promise<AxiosResponse | undefined>;
    signUpError: string;
    setSignUpError: (error: string) => void;
    deleteUser: () => Promise<AxiosResponse | undefined>;
    getClient: () => Promise<object | undefined>;
};

const defaultAuthContext: AuthContextType = {
    login: async (email: string, password: string) => {
        return {};
    },
    signUp: async (data: object) => {
        return undefined;
    },
    signUpError: "Erro no Cadastro",
    setSignUpError: (error: string) => {},
    deleteUser: async () => {
        return undefined;
    },
    getClient: async () => {
        return {};
    }
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

    async function deleteUser() {
        try {
            const response = await authRepository.deleteClient();
            return response;
        } catch (error: any) {
            console.log(error);
        }
    }

    async function getClient() {
        try {
            const response = await authRepository.getClientId();
            return response;
        } catch (error: any) {
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider
            value={{
                login,
                signUp,
                signUpError,
                setSignUpError,
                deleteUser,
                getClient
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
