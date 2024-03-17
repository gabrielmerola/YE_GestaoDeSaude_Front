import CancelAndSaveButton from "@components/CancelAndSaveButton";
import { Header } from "@components/Header";
import MedicinesAndButton from "@components/MedicinesAndButton";
import React from "react";
import { View } from "react-native";

import { styles } from "./styles";

export default function NewMedicine({ navigation }: any) {
    return (
        <>
            <Header text="Novo Medicamento" isBackPress />
            <View style={styles.container}>
                <MedicinesAndButton
                    text="Nome: "
                    navigation={navigation}
                    screenName="Login"
                    input
                />
                <MedicinesAndButton
                    text="Horário"
                    text2="09:00"
                    navigation={navigation}
                    screenName="Login"
                />
                <MedicinesAndButton
                    text="Período"
                    text2="7 dias"
                    navigation={navigation}
                    screenName="Login"
                />
                <MedicinesAndButton
                    text="Intervalo"
                    text2="8hs"
                    navigation={navigation}
                    screenName="Login"
                />
                <MedicinesAndButton
                    text="Quantidade"
                    text2="1"
                    navigation={navigation}
                    screenName="Login"
                />
            </View>
            <CancelAndSaveButton navigation={navigation} />
        </>
    );
}
