import { Header } from "@components/Header";
import React from "react";
import MedicinesAndButton from "@components/MedicinesAndButton";
import BottomAddButton from "@components/BottomAddButton";
import { styles } from "./styles";
import { View } from "react-native";

export default function ConsultationsHeld({ navigation }: any) {
    return (
        <>
            <Header text={"Consultas Realizadas"} isBackPress={true} />
            <View style={styles.container}>
                <MedicinesAndButton
                    text={"Clínico Geral"}
                    chevron={true}
                    navigation={navigation}
                    screenName={"ListConsultationsHeld"}
                />
                <MedicinesAndButton
                    text={"Ginecologista"}
                    chevron={true}
                    navigation={navigation}
                    screenName={"ListConsultationsHeld"}
                />
            </View>
            <BottomAddButton
                screenName={"NewMedicine"}
                navigation={navigation}
            />
        </>
    );
}
