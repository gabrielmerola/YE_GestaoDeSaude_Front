import { GlucoseRepositoryHttp } from "@api/repositories/glucose_repository_http";
import { AxiosResponse } from "axios";
import { PropsWithChildren, createContext, useState } from "react";

export interface GlucoseType {
    [key: string]: string | number;
    id: number;
    date: string;
    measure: string;
    level: string;
}

type GlucoseContextType = {
    getGlucose: () => Promise<[] | undefined>;
    postGlucose: (data: object) => Promise<AxiosResponse | undefined>;
    deleteGlucose: (id: number) => Promise<AxiosResponse | undefined>;
    getGlucoseById: (id: number) => Promise<object | undefined>;
    getGlucoseLatest: () => Promise<GlucoseType | undefined>;
};

const defaultGlucoseContext: GlucoseContextType = {
    getGlucose: async () => {
        return [];
    },
    postGlucose: async (data: object) => {
        return undefined;
    },
    deleteGlucose: async (id: number) => {
        return undefined;
    },
    getGlucoseById: async (id: number) => {
        return {};
    },
    getGlucoseLatest: async () => {
        return {
            id: 0,
            date: "",
            measure: "",
            level: ""
        };
    }
};

export const GlucoseContext = createContext<GlucoseContextType>(
    defaultGlucoseContext
);

export function GlucoseContextProvider({ children }: PropsWithChildren) {
    const glucoseRepository = new GlucoseRepositoryHttp();

    async function getGlucose() {
        try {
            const response = await glucoseRepository.getGlucose();
            return response;
        } catch (error: any) {
            console.log(error);
        }
    }

    async function postGlucose(data: object) {
        try {
            const response = await glucoseRepository.postGlucose(data);
            return response;
        } catch (error: any) {
            console.log(error);
        }
    }

    async function deleteGlucose(id: number) {
        try {
            const response = await glucoseRepository.deleteGlucose(id);
            return response;
        } catch (error: any) {
            console.log(error);
        }
    }

    async function getGlucoseById(id: number) {
        try {
            const response = await glucoseRepository.getGlucoseById(id);
            return response;
        } catch (error: any) {
            console.log(error);
        }
    }

    async function getGlucoseLatest() {
        try {
            const response = await glucoseRepository.getGlucoseLatest();
            return response;
        } catch (error: any) {
            console.log(error);
        }
    }

    return (
        <GlucoseContext.Provider
            value={{
                getGlucose,
                postGlucose,
                deleteGlucose,
                getGlucoseById,
                getGlucoseLatest
            }}
        >
            {children}
        </GlucoseContext.Provider>
    );
}
