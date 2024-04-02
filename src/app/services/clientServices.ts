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
            message: error.response.data
        };
    }
}

// export async function doLogin(email: string, password: string) {
//     try {
//         if (!email || !password) {
//             return {
//                 status: 422,
//                 message: "Preencha todos os campos",
//                 token: "Token inválida "
//             };
//         }
//         const result: AxiosResponse = await api.post('/auth', {
//             "email": email,
//             "password": password
//         })
//         console.log(result.data);
//         return {
//             status: result.status,
//             token: result.data.token
//         }
//     }
//     catch (error: AxiosError | any) {
//         return {
//             status: error.result.status,
//             token: error.result.data
//         };
//     }
// }
