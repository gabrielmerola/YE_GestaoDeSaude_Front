import { Header } from "@components/Header";
import { View } from "@screens/ListConsultationsHeld/styles";
import React from "react";
import ListInteractableItem from "src/app/components/ListInteractableItem";

export default function ListConsultationsHeld() {
    return (
        <>
            <Header text="Consultas Realizadas" isBackPress />
            <View>
                <ListInteractableItem
                    text="Próxima consulta"
                    text2="17/08/2023"
                />
                <ListInteractableItem text="17/02/2023" />
                <ListInteractableItem text="25/05/2022" />
                <ListInteractableItem text="04/01/2022" />
            </View>
        </>
    );
}
