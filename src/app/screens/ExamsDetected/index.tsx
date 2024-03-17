import CancelAndSaveButton from "@components/CancelAndSaveButton";
import { Header } from "@components/Header";
import MedicinesAndButton from "@components/MedicinesAndButton";
import { styles } from "@screens/ExamsHeld/styles";
import React from "react";
import { View } from "react-native";

export default function ExamsDetected({ navigation }: any) {
    return (
        <>
            <Header text="Exames Detectados" isBackPress />
            <View style={styles.container}>
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
