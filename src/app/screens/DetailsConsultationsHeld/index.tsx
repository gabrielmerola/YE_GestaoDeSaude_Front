import { Header } from "@components/Header";
import React from "react";
import MedicinesAndButton from "@components/MedicinesAndButton";
import BottomAddButton from "@components/BottomAddButton";
import { styles } from "./styles";
import { Text, View } from "react-native";

export default function DetailsConsultationsHeld({ navigation }: any) {
    return (
        <>
            <Header text={"Consultas Realizadas"} isBackPress={true} />
            <Text>Esperando a alteração da prototipação de tela (figma)</Text>
        </>
    );
}
