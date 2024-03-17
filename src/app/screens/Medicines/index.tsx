import BottomAddButton from "@components/BottomAddButton";
import { Header } from "@components/Header";
import MedicinesAndButton from "@components/MedicinesAndButton";
import React from "react";
import { View } from "react-native";

import { styles } from "./styles";

export default function Medicines({ navigation }: any) {
    return (
        <>
            <Header text="Medicamentos" isBackPress />
            <View style={styles.container}>
                <MedicinesAndButton
                    text="Losartana"
                    text2="08:00"
                    chevron
                    navigation={navigation}
                    screenName="Login"
                />
                <MedicinesAndButton
                    text="Hidrocolorotiazida"
                    text2="08:00"
                    chevron
                    navigation={navigation}
                    screenName="Login"
                />
                <MedicinesAndButton
                    text="Pantoprazol"
                    text2="12:00"
                    chevron
                    navigation={navigation}
                    screenName="Login"
                />
            </View>
            <BottomAddButton screenName="NewMedicine" navigation={navigation} />
        </>
    );
}
