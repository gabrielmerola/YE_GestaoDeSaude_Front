import { ImcRepositoryHttp } from "@api/repositories/imc_repository_http";
import { Axios, AxiosResponse } from "axios";
import { createContext, ReactNode } from "react";

export interface ImcRecord {
    weight: number;
    height: number;
    imc: number;
    level: string;
    date: string;
}

interface ImcContextType {
    getLatestImc: () => Promise<ImcRecord | null>;
    postImc: (data: object) => Promise<AxiosResponse | undefined>;
    getByDateImc: (date: string) => Promise<ImcRecord | null>;
    getAllDateImc: () => Promise<[] | undefined>;
}

const defaultImcContext: ImcContextType = {
    getLatestImc: async () => null,
    getByDateImc: async (date: string) => null,
    postImc: async (data: object) => {
        return undefined;
    },
    getAllDateImc: async () => {
        return [];
    }
};

export const ImcContext = createContext<ImcContextType>(defaultImcContext);

export function ImcContextProvider({ children }: { children: ReactNode }) {
    const imcRepository = new ImcRepositoryHttp();

    async function getLatestImc(): Promise<ImcRecord | null> {
        try {
            const response = await imcRepository.getLatestImc();
            return response;
        } catch (error) {
            console.error("Failed to fetch IMC records:", error);
            return null;
        }
    }

    async function getByDateImc(date: string): Promise<ImcRecord | null> {
        try {
            const response = await imcRepository.getByDateImc(date);
            return response;
        } catch (error) {
            console.error("Failed to fetch IMC records:", error);
            return null;
        }
    }

    async function postImc(data: object): Promise<undefined> {
        try {
            await imcRepository.postNewImc(data);
        } catch (error) {
            console.error("Failed to post new IMC record:", error);
        }
    }

    async function getAllDateImc(): Promise<[] | undefined> {
        try {
            const response = await imcRepository.getAllDateImc();
            return response;
        } catch (error) {
            console.error("Failed to post new IMC record:", error);
        }
    }

    return (
        <ImcContext.Provider
            value={{ getLatestImc, postImc, getByDateImc, getAllDateImc }}
        >
            {children}
        </ImcContext.Provider>
    );
}
