import BottomAddButton from "@components/BottomAddButton";
import { Header } from "@components/Header";
import MedicinesAndButton from "@components/MedicinesAndButton";
import { View } from "@screens/ConsultationsHeld/styles";
import React, { useState } from "react";

export default function ConsultationsHeld({ navigation }: any) {
    const [showNewMedicines, setShowNewMedicines] = useState(true);

    return (
        <>
            <Header text="Consultas Realizadas" isBackPress />
            <View>
                <MedicinesAndButton
                    text="Clínico Geral"
                    chevron
                    modalFunction={() => setShowNewMedicines(true)}
                />
                {/*<MedicinesAndButton*/}
                {/*    text="Ginecologista"*/}
                {/*    chevron*/}
                {/*/>*/}
                <BottomAddButton
                    screenName="NewMedicine"
                    navigation={navigation}
                />
            </View>
        </>
    );
}
