import { Header } from "@components/Header";
import { View } from "react-native";
import React from "react";
import { styles } from "./styles";
import MedicinesAndButton from "@components/MedicinesAndButton";
import CancelAndSaveButton from "@components/CancelAndSaveButton";

export default function NewMedicine({ navigation }: any) {
    return (
        <>
            <Header text={"Novo Medicamento"} isBackPress={true} />
            <View style={styles.container}>
                <MedicinesAndButton
                    text={"Nome: "}
                    navigation={navigation}
                    screenName={"Login"}
                    input={true}
                />
                <MedicinesAndButton
                    text={"Horário"}
                    text2={"09:00"}
                    navigation={navigation}
                    screenName={"Login"}
                />
                <MedicinesAndButton
                    text={"Período"}
                    text2={"7 dias"}
                    navigation={navigation}
                    screenName={"Login"}
                />
                <MedicinesAndButton
                    text={"Intervalo"}
                    text2={"8hs"}
                    navigation={navigation}
                    screenName={"Login"}
                />
                <MedicinesAndButton
                    text={"Quantidade"}
                    text2={"1"}
                    navigation={navigation}
                    screenName={"Login"}
                />
            </View>
            <CancelAndSaveButton navigation={navigation} />
        </>
    );
}
