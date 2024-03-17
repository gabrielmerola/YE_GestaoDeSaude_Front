import CancelAndSaveButton from "@components/CancelAndSaveButton";
import { Header } from "@components/Header";
import MedicinesAndButton from "@components/MedicinesAndButton";
import React from "react";
import { View } from "react-native";

import { styles } from "./styles";

export default function ExamsHeld({ navigation }: any) {
    return (
        <>
            <Header text="Exames Realizados" isBackPress />
            <View style={styles.container}>
                <MedicinesAndButton
                    text="Glicose"
                    screenName=""
                    navigation={navigation}
                    chevron
                />
            </View>
        </>
    );
}
