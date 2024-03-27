import { AppError } from "@utils/appError";
import { useToast } from "native-base";

import { api } from "./api";
import { FormDataProps } from "../interfaces/client";

export async function registerClient(user: FormDataProps) {
    // const toast = useToast();
    if (!user) return null;

    try {
        const result = await api.post("/client/", user);
        console.log(user);
        console.log(result.data);
        return result.data;
    } catch (error) {
        console.log("Erro", error);
        return null;
        // const isAppError = error instanceof AppError;
        // const title = isAppError ? error.message : 'Não foi possível criar a conta. Tente novamente mais tarde.'
        // toast.show({
        //     title,
        //     placement: 'top',
        //     bgColor: 'red.500'
        // })
    }
}
