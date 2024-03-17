import { Header } from "@components/Header";
import React from "react";
import MedicinesAndButton from "@components/MedicinesAndButton";
import BottomAddButton from "@components/BottomAddButton";
import { styles } from "./styles";
import { View } from "react-native";

export default function Medicines({ navigation }: any) {
    return (
        <>
            <Header text={"Medicamentos"} isBackPress={true} />
            <View style={styles.container}>
                <MedicinesAndButton
                    text={"Losartana"}
                    text2={"08:00"}
                    chevron={true}
                    navigation={navigation}
                    screenName={"Login"}
                />
                <MedicinesAndButton
                    text={"Hidrocolorotiazida"}
                    text2={"08:00"}
                    chevron={true}
                    navigation={navigation}
                    screenName={"Login"}
                />
                <MedicinesAndButton
                    text={"Pantoprazol"}
                    text2={"12:00"}
                    chevron={true}
                    navigation={navigation}
                    screenName={"Login"}
                />
            </View>
            <BottomAddButton
                addButtonScreen={"NewMedicine"}
                navigation={navigation}
            />
        </>
    );
}
