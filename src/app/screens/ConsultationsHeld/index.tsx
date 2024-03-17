import BottomAddButton from "@components/BottomAddButton";
import { Header } from "@components/Header";
import MedicinesAndButton from "@components/MedicinesAndButton";
import React from "react";
import { View } from "react-native";

import { styles } from "./styles";

export default function ConsultationsHeld({ navigation }: any) {
    return (
        <>
            <Header text="Consultas Realizadas" isBackPress />
            <View style={styles.container}>
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
            </View>
            <BottomAddButton screenName="NewMedicine" navigation={navigation} />
        </>
    );
}
