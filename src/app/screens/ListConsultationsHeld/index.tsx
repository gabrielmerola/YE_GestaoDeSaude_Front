import { Header } from "@components/Header";
import React from "react";
import MedicinesAndButton from "@components/MedicinesAndButton";
import BottomAddButton from "@components/BottomAddButton";
import { styles } from "./styles";
import { View } from "react-native";

export default function ListConsultationsHeld({ navigation }: any) {
    return (
        <>
            <Header text={"Consultas Realizadas"} isBackPress={true} />
            <View style={styles.container}>
                <MedicinesAndButton
                    text={"Próxima consulta"}
                    text2={"17/08/2023"}
                    chevron={true}
                    navigation={navigation}
                    screenName={"Login"}
                />
                <MedicinesAndButton
                    text={"17/02/2023"}
                    chevron={true}
                    navigation={navigation}
                    screenName={"Login"}
                />
                <MedicinesAndButton
                    text={"25/05/2022"}
                    chevron={true}
                    navigation={navigation}
                    screenName={"Login"}
                />
                <MedicinesAndButton
                    text={"04/01/2022"}
                    chevron={true}
                    navigation={navigation}
                    screenName={"Login"}
                />
            </View>
        </>
    );
}
