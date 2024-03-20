import { Header } from "@components/Header";
import MedicinesAndButton from "@components/MedicinesAndButton";
import { View } from "@screens/ListConsultationsHeld/styles";
import React from "react";

export default function ListConsultationsHeld({ navigation }: any) {
    return (
        <>
            <Header text="Consultas Realizadas" isBackPress />
            <View>
                <MedicinesAndButton
                    text="Próxima consulta"
                    text2="17/08/2023"
                    chevron
                    navigation={navigation}
                    screenName="Login"
                />
                <MedicinesAndButton
                    text="17/02/2023"
                    chevron
                    navigation={navigation}
                    screenName="Login"
                />
                <MedicinesAndButton
                    text="25/05/2022"
                    chevron
                    navigation={navigation}
                    screenName="Login"
                />
                <MedicinesAndButton
                    text="04/01/2022"
                    chevron
                    navigation={navigation}
                    screenName="Login"
                />
            </View>
        </>
    );
}
