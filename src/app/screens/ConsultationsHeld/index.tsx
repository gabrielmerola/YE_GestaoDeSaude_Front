import BottomAddButton from "@components/BottomAddButton";
import { Header } from "@components/Header";
import MedicinesAndButton from "@components/MedicinesAndButton";
import { View } from "@screens/ConsultationsHeld/styles";
import React from "react";

export default function ConsultationsHeld({ navigation }: any) {
    return (
        <>
            <Header text="Consultas Realizadas" isBackPress />
            <View>
                <MedicinesAndButton
                    text="Clínico Geral"
                    chevron
                    navigation={navigation}
                    screenName="ListConsultationsHeld"
                />
                <MedicinesAndButton
                    text="Ginecologista"
                    chevron
                    navigation={navigation}
                    screenName="ListConsultationsHeld"
                />
                <BottomAddButton
                    screenName="NewMedicine"
                    navigation={navigation}
                />
            </View>
        </>
    );
}
