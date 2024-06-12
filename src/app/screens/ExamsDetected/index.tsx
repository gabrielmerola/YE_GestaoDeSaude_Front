import { Header } from "@components/Header";
import { Table } from "@components/Table";
import {
    Button,
    ButtonContainer,
    ButtonText,
    FlatListStyled,
    View
} from "@screens/ExamsDetected/styles";
import React, { useState } from "react";
import Collapsible from "react-native-collapsible";
import ListInteractableItem from "src/app/components/ListInteractableItem";

interface Exams {
    date: string;
    especiality: string;
}

type Row = {
    [key: string]: string;
};

export default function ExamsDetected({ navigation }: any) {
    type ItemName = "glucose" | "hemogram" | "cholesterol" | "ast" | "alt";

    const [collapsedItems, setCollapsedItems] = useState({
        glucose: true,
        hemogram: true,
        cholesterol: true,
        ast: true,
        alt: true
    });

    const toggleCollapsible = (itemName: ItemName) => {
        setCollapsedItems({
            ...collapsedItems,
            [itemName]: !collapsedItems[itemName]
        });
    };

    return (
        <>
            <Header text="Exames Detectados" isBackPress />
            <View>
                <ListInteractableItem
                    text="Hemograma"
                    downChevron
                    changeIcon={collapsedItems.hemogram}
                    isButton
                    modalFunction={() => toggleCollapsible("hemogram")}
                />

                <Collapsible collapsed={collapsedItems.hemogram} align="center">
                    <FlatListStyled
                        data={[
                            {
                                date: "17/02/2023",
                                especiality: "4.500.000/mm³"
                            }
                        ]}
                        keyExtractor={(item) => {
                            const examItem = item as Exams;
                            return examItem.date;
                        }}
                        renderItem={({ item }) => {
                            const examItem = item as Exams;
                            const row: Row = {
                                date: examItem.date,
                                especiality: examItem.especiality
                            };
                            return <Table rows={[row]} />;
                        }}
                    />
                </Collapsible>

                <ListInteractableItem
                    text="Glicemia"
                    downChevron
                    changeIcon={collapsedItems.glucose}
                    isButton
                    modalFunction={() => toggleCollapsible("glucose")}
                />

                <Collapsible collapsed={collapsedItems.glucose} align="center">
                    <FlatListStyled
                        data={[
                            {
                                date: "25/06/2024",
                                especiality: "99 mg/dL"
                            }
                        ]}
                        keyExtractor={(item) => {
                            const examItem = item as Exams;
                            return examItem.date;
                        }}
                        renderItem={({ item }) => {
                            const examItem = item as Exams;
                            const row: Row = {
                                date: examItem.date,
                                especiality: examItem.especiality
                            };
                            return <Table rows={[row]} />;
                        }}
                    />
                </Collapsible>
                <Button onPress={() => navigation.navigate("ExamsHistory")}>
                    <ButtonContainer>
                        <ButtonText>Salvar</ButtonText>
                    </ButtonContainer>
                </Button>
            </View>
        </>
    );
}
