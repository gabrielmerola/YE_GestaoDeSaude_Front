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
                <ListInteractableItem
                    text="Nome: "
                    navigation={navigation}
                    screenName="Login"
                    input
                />
                <ListInteractableItem
                    text="Horário"
                    text2="09:00"
                    navigation={navigation}
                    screenName="Login"
                />
                <ListInteractableItem
                    text="Período"
                    text2="7 dias"
                    navigation={navigation}
                    screenName="Login"
                />
                <ListInteractableItem
                    text="Intervalo"
                    text2="8hs"
                    navigation={navigation}
                    screenName="Login"
                />
                <ListInteractableItem
                    text="Quantidade"
                    text2="1"
                    navigation={navigation}
                    screenName="Login"
                />
            </View>
            <CancelAndSaveButton navigation={navigation} />
        </>
    );
}
