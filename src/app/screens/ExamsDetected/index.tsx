import { Header } from "@components/Header";
import { View } from "react-native";
import { styles } from "@screens/ExamsHeld/styles";
import MedicinesAndButton from "@components/MedicinesAndButton";
import CancelAndSaveButton from "@components/CancelAndSaveButton";
import React from "react";

export default function ExamsDetected({ navigation }: any) {
    return (
        <>
            <Header text={"Exames Detectados"} isBackPress={true} />
            <View style={styles.container}>
                <MedicinesAndButton
                    text={"Hemograma"}
                    screenName={""}
                    navigation={navigation}
                />
            </View>
            <CancelAndSaveButton navigation={navigation} />
        </>
    );
}
