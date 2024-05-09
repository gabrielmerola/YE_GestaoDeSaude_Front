import { BloodPressureRepositoryHttp } from "@api/repositories/blood_pressure_repository_http";
import { AxiosResponse } from "axios";
import { PropsWithChildren, createContext } from "react";

export interface PressureType {
    [key: string]: string | number;
    id: number;
    date: string;
    measure: string;
    level: string;
}

type BloodPressureContextType = {
    getBloodPressure: () => Promise<[] | undefined>;
    postBloodPressure: (data: object) => Promise<AxiosResponse | undefined>;
    deleteBloodPressure: (id: number) => Promise<AxiosResponse | undefined>;
    getBloodPressureById: (id: number) => Promise<object | undefined>;
    getBloodPressureLatest: () => Promise<PressureType | undefined>;
};

const defaultBloodPressureContext: BloodPressureContextType = {
    getBloodPressure: async () => {
        return [];
    },
    postBloodPressure: async (data: object) => {
        return undefined;
    },
    deleteBloodPressure: async (id: number) => {
        return undefined;
    },
    getBloodPressureById: async (id: number) => {
        return {};
    },
    getBloodPressureLatest: async () => {
        return {
            id: 0,
            date: "",
            measure: "",
            level: ""
        };
    }
};

export const BloodPressureContext = createContext<BloodPressureContextType>(
    defaultBloodPressureContext
);

export function BloodPressureContextProvider({ children }: PropsWithChildren) {
    const bloodPressureRepository = new BloodPressureRepositoryHttp();

    async function getBloodPressure() {
        try {
            const response = await bloodPressureRepository.getBloodPressure();
            return response;
        } catch (error: any) {
            console.log(error);
        }
    }

    async function postBloodPressure(data: object) {
        try {
            const response =
                await bloodPressureRepository.postBloodPressure(data);
            return response;
        } catch (error: any) {
            console.log(error);
        }
    }

    async function deleteBloodPressure(id: number) {
        try {
            const response =
                await bloodPressureRepository.deleteBloodPressure(id);
            return response;
        } catch (error: any) {
            console.log(error);
        }
    }

    async function getBloodPressureById(id: number) {
        try {
            const response =
                await bloodPressureRepository.getBloodPressureById(id);
            console.log(response);
            return response;
        } catch (error: any) {
            console.log(error);
        }
    }

    async function getBloodPressureLatest() {
        try {
            const response =
                await bloodPressureRepository.getBloodPressureLatest();
            return response;
        } catch (error: any) {
            console.log(error);
        }
    }

    return (
        <BloodPressureContext.Provider
            value={{
                getBloodPressure,
                postBloodPressure,
                deleteBloodPressure,
                getBloodPressureById,
                getBloodPressureLatest
            }}
        >
            {children}
        </BloodPressureContext.Provider>
    );
}
