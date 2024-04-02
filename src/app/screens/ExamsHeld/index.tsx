import { Header } from "@components/Header";
import { View } from "@screens/ExamsHeld/styles";
import React from "react";
import ListInteractableItem from "src/app/components/ListInteractableItem";

export default function ExamsHeld({ navigation }: any) {
    return (
        <>
            <Header text="Exames Realizados" isBackPress />
            <View>
                <ListInteractableItem text="Glicose" />
            </View>
        </>
    );
}
