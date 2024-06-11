import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosError, AxiosResponse } from "axios";

import { api } from "../http";

export interface MedicineFormData {
    id: number;
    name: string;
    time: string;
    period: number;
    quantity: number;
    dosage: string;
}

export class MedicineRespositoryHttp {
    async getAllMedicines() {
        try {
            const response: AxiosResponse = await api.get("/medicine", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${await AsyncStorage.getItem("token")}`
                }
            });
            return response.data;
        } catch (error: AxiosError | any) {
            return error.response;
        }
    }

    async getMedicineByID(id: number) {
        try {
            const response: AxiosResponse = await api.get(`/medicine/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${await AsyncStorage.getItem("token")}`
                }
            });
            return response.data;
        } catch (error: AxiosError | any) {
            return error.response;
        }
    }

    async createMedicine(data: object) {
        console.log(data);
        try {
            const response: AxiosResponse = await api.post("/medicine", data, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${await AsyncStorage.getItem("token")}`
                }
            });
            console.log("Response OK: " + response);
            return response;
        } catch (error: AxiosError | any) {
            console.log("Response 1: " + error);
            return error.response;
        }
    }

    async deleteMedicineByID(id: number) {
        console.log("id: ", id + "\ntoken: ");
        try {
            const response: AxiosResponse = await api.delete(
                `/medicine/${id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${await AsyncStorage.getItem("token")}`
                    }
                }
            );
            return response.data;
        } catch (error: AxiosError | any) {
            return error.response;
        }
    }
}
