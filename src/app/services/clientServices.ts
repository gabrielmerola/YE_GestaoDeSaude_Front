import { AxiosError, AxiosResponse } from "axios";

import { api } from "./api";
import { FormDataProps } from "../interfaces/client";

interface Props {
    status: number | undefined;
    message: string | undefined;
}
export async function registerClient(user: FormDataProps): Promise<Props> {
    try {
        if (!user) {
            return {
                status: 422,
                message: "Preencha todos os campos"
            };
        }

        const response: AxiosResponse = await api.post("/client", user);
        // console.log("Response OK: " + response);
        return {
            status: response.status,
            message: response.data.message
        };
    } catch (error: AxiosError | any) {
        // console.log("Response 1: " + error);
        return {
            status: error.response.status,
            message: error.response.data.message
        };
    }
}

export async function doLogin(email: string, password: string) {
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
            token: result.data.token
        };
    } catch (error: AxiosError | any) {
        return {
            status: error.result.status,
            token: error.result.data
        };
    }
}
