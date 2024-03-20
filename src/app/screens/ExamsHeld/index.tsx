import { Header } from "@components/Header";
import MedicinesAndButton from "@components/MedicinesAndButton";
import { View } from "@screens/ExamsHeld/styles";
import React from "react";

export default function ExamsHeld({ navigation }: any) {
    return (
        <>
            <Header text="Exames Realizados" isBackPress />
            <View>
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
