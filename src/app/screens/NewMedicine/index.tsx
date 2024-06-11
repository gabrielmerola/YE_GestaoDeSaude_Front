import CancelAndSaveButton from "@components/CancelAndSaveButton";
import { Header } from "@components/Header";
import { View } from "@screens/NewMedicine/styles";
import React from "react";
import ListInteractableItem from "src/app/components/ListInteractableItem";

export default function NewMedicine({ navigation }: any) {
    return (
        <>
            <Header text="Novo Medicamento" isBackPress />
            <View>
                <ListInteractableItem text="Nome: " isButton={false} />
                <ListInteractableItem
                    text="Horário"
                    text2="09:00"
                    isButton={false}
                />
                <ListInteractableItem
                    text="Período"
                    text2="7 dias"
                    isButton={false}
                />
                <ListInteractableItem
                    text="Intervalo"
                    text2="8hs"
                    isButton={false}
                />
                <ListInteractableItem
                    text="Quantidade"
                    text2="1"
                    isButton={false}
                />
            </View>
            <CancelAndSaveButton onPress={navigation.goBack()} />
        </>
    );
}
