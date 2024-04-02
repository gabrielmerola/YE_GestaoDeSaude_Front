import CancelAndSaveButton from "@components/CancelAndSaveButton";
import { Header } from "@components/Header";
import { View } from "@screens/ExamsDetected/styles";
import React from "react";
import ListInteractableItem from "src/app/components/ListInteractableItem";

export default function ExamsDetected() {
    return (
        <>
            <Header text="Exames Detectados" isBackPress />
            <View>
                <ListInteractableItem text="Hemograma" />
            </View>
            <CancelAndSaveButton />
        </>
    );
}
