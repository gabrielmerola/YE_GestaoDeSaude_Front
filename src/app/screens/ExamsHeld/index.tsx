import { Header } from "@components/Header";
import { View } from "@screens/ExamsHeld/styles";
import React from "react";
import ListInteractableItem from "src/app/components/ListInteractableItem";

export default function ExamsHeld() {
    return (
        <>
            <Header text="Exames Realizados" isBackPress />
            <View>
                <ListInteractableItem isButton={false} text="Glicose" />
            </View>
        </>
    );
}
