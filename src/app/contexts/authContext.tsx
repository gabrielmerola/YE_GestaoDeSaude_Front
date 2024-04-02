import { api } from "@services/api";
import { AxiosError, AxiosResponse } from "axios";
import { ReactNode, createContext, useState } from "react";

import { UserDTO } from "../../../src/app/dtos/userDTO";

export type AuthContextDataProps = {
    user: UserDTO;
    doLogin: (
        email: string,
        password: string
    ) => Promise<{ status: number; message: string; token: string }>;
};

type AuthContextProvideProps = {
    children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
    {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProvideProps) {
    const [user, setUser] = useState({} as UserDTO);

    async function doLogin(email: string, password: string) {
        try {
            if (!email || !password) {
                return {
                    status: 422,
                    message: "Preencha todos os campos",
                    token: "Token inválida "
                };
            }
            const result: AxiosResponse = await api.post("/auth", {
                email,
                password
            });
            console.log(result.data);
            return {
                status: result.status,
                token: result.data.token,
                message: ""
            };
        } catch (error: AxiosError | any) {
            return {
                status: error.result.status,
                token: error.result.data,
                message: "Erro no login"
            };
        }
    }

    return (
        <AuthContext.Provider value={{ user, doLogin }}>
            {children}
        </AuthContext.Provider>
    );
}
