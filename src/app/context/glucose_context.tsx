import { GlucoseRepositoryHttp } from "@api/repositories/glucose_repository_http";
import { AxiosResponse } from "axios";
import { PropsWithChildren, createContext, useState } from "react";

type GlucoseContextType = {
    getGlucose: () => Promise<[] | undefined>;
    postGlucose: (data: object) => Promise<AxiosResponse | undefined>;
    deleteGlucose: (id: string) => void;
    getGlucoseById: (id: string) => void;
    getGlucoseLatest: () => void;
};

const defaultGlucoseContext: GlucoseContextType = {
    getGlucose: async () => {
        return [];
    },
    postGlucose: async (data: object) => {
        return undefined;
    },
    deleteGlucose: (id: string) => {},
    getGlucoseById: (id: string) => {},
    getGlucoseLatest: () => {}
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

    async function deleteGlucose(id: string) {
        try {
            await glucoseRepository.deleteGlucose(id);
            getGlucose();
        } catch (error: any) {
            console.log(error);
        }
    }

    async function getGlucoseById(id: string) {
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
