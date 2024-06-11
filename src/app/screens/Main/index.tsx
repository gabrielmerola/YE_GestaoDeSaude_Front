import { Card } from "@components/Card";
import { Footer } from "@components/Footer";
import {
    BloodPressureContext,
    PressureType
} from "@context/blood-pressure-context";
import { GlucoseContext } from "@context/glucose_context";
import { ImcContext } from "@context/imc_context";
import { useCallback, useContext, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";

import { Container } from "./styles";
import { useFocusEffect } from "@react-navigation/native";

export default function Main({ navigation }: any) {
    const { getBloodPressureLatest } = useContext(BloodPressureContext);
    const [pressure, setPressure] = useState<PressureType>("" as any);

    const { getGlucoseLatest } = useContext(GlucoseContext);
    const [glucose, setGlucose] = useState({} as any);

    const { getLatestImc } = useContext(ImcContext);
    const [imc, setImc] = useState({} as any);

    async function getImc() {
        const response = await getLatestImc();
        if (response !== undefined) {
            setImc(response);
        }
    }

    async function getGlucose() {
        const repsonse = await getGlucoseLatest();
        if (repsonse !== undefined) {
            setGlucose(repsonse);
        }
    }

    async function getPressure() {
        const response = await getBloodPressureLatest();
        if (response !== undefined) {
            setPressure(response);
        }
    }

    useFocusEffect(
        useCallback(() => {
          getGlucose();
          getPressure();
          getImc();
        }, [])
      );

    return (
        <>
            <Container>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Pressure")}
                >
                    <Card
                        title="Aferições de Pressão"
                        description="Gerencie as suas aferições de pressão"
                        subTitle="Ultima medida"
                        secDescription={pressure.measure ?? "Nenhuma medida"}
                        subDescription={pressure.level ?? "- - - -"}
                        color="red"
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Glucose")}
                >
                    <Card
                        title="Aferições de Glicemia"
                        description="Gerencie as suas aferições de glicemia"
                        subTitle="Ultima medida"
                        secDescription={glucose.measure ?? "Nenhuma medida"}
                        subDescription={glucose.level ?? "- - - -"}
                        color="blue"
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("IMC")}>
                    <Card
                        title="Verificação do IMC"
                        description="Verifique seu IMC com base na sua altura e peso"
                        subTitle="Ultima medida"
                        secDescription={imc.imc ?? "Nenhuma medida"}
                        subDescription={imc.level ?? "- - - -"}
                        color="green"
                    />
                </TouchableOpacity>
            </Container>
            <Footer navigation={navigation} />
        </>
    );
}
