import CancelAndSaveButton from "@components/CancelAndSaveButton";
import { Header } from "@components/Header";
import MedicinesAndButton from "@components/MedicinesAndButton";
import { View } from "@screens/ExamsDetected/styles";
import React from "react";

export default function ExamsDetected({ navigation }: any) {
    return (
        <>
            <Header text="Exames Detectados" isBackPress />
            <View>
                <MedicinesAndButton
                    text="Hemograma"
                    screenName=""
                    navigation={navigation}
                />
            </View>
            <CancelAndSaveButton navigation={navigation} />
        </>
    );
}
