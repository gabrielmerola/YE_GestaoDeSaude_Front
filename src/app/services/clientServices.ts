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
        return {
            status: response.status,
            message: response.data
        };
    } catch (error: AxiosError | any) {
        return {
            status: error.response.status,
            message: error.response.data.message
        };
    }
}
