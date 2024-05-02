import { AxiosError, AxiosResponse } from "axios";

import { api } from "../http";

export interface MedicineFormData {
    name: string;
    time: string;
    period: number;
    quantity: number;
    dosage: string;
}

export class MedicineRespositoryHttp {
    async getAllMedicines(token: string | null) {
        try {
            const response: AxiosResponse = await api.get("/medicine", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error: AxiosError | any) {
            return error.response;
        }
    }

    async getMedicineByID(id: number) {
        try {
            const response: AxiosResponse = await api.get(`/medicine${id}`);
            return response.data;
        } catch (error: AxiosError | any) {
            return error.response;
        }
    }

    async createMedicine(data: object) {
        try {
            const response: AxiosResponse = await api.post("/medicine", data);
            // console.log("Response OK: " + response);
            return response;
        } catch (error: AxiosError | any) {
            // console.log("Response 1: " + error);
            return error.response;
        }
    }

    async deleteMedicineByID(id: number) {
        try {
            const response: AxiosResponse = await api.delete(`/medicine${id}`);
            return response.data;
        } catch (error: AxiosError | any) {
            return error.response;
        }
    }
}
