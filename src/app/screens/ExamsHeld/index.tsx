import { Header } from "@components/Header";
import React from "react";
import { View } from "react-native";
import CancelAndSaveButton from "@components/CancelAndSaveButton";
import { styles } from "./styles";
import MedicinesAndButton from "@components/MedicinesAndButton";

export default function ExamsHeld({ navigation }: any) {
    return (
        <>
            <Header text={"Exames Realizados"} isBackPress={true} />
            <View style={styles.container}>
                <MedicinesAndButton
                    text={"Glicose"}
                    screenName={""}
                    navigation={navigation}
                    chevron={true}
                />
            </View>
        </>
    );
}
