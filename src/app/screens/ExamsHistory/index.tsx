import { Header } from "@components/Header";
import { Table } from "@components/Table";
import {
    Button,
    ButtonContainer,
    AddIconStyled,
    ButtonText,
    FlatListStyled
} from "@screens/ExamsHistory/styles";
import { useState } from "react";
import { FlatList, View } from "react-native";
import Collapsible from "react-native-collapsible";
import ListInteractableItem from "src/app/components/ListInteractableItem";

interface Exams {
    date: string;
    especiality: string;
}

type Row = {
    [key: string]: string;
};

export default function ExamsHistory({ navigation }: any) {
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
            <Header
                text="Histórico de Exames"
                isBackPress
                onModalClose={() =>
                    setCollapsedItems({
                        glucose: true,
                        hemogram: true,
                        cholesterol: true,
                        ast: true,
                        alt: true
                    })
                }
            />
            <View style={{justifyContent: 'space-between'}}>
                <FlatList
                    style={{height: '45%'}}
                    data={[1]}
                    renderItem={() => {
                        return (
                            <>
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
                                text="Colesterol Total"
                                downChevron
                                changeIcon={collapsedItems.cholesterol}
                                isButton
                                modalFunction={() => toggleCollapsible("cholesterol")}
                            />

                            <Collapsible
                                collapsed={collapsedItems.cholesterol}
                                align="center"
                            >
                                <FlatListStyled
                                    data={[
                                        {
                                            date: "17/02/2023",
                                            especiality: "25 U/L"
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
                                text="Glicose"
                                downChevron
                                changeIcon={collapsedItems.glucose}
                                isButton
                                modalFunction={() => toggleCollapsible("glucose")}
                            />

                            <Collapsible collapsed={collapsedItems.glucose} align="center">
                                <FlatListStyled
                                    data={[
                                        {
                                            date: "17/02/2023",
                                            especiality: "79 mg/dl"
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
                                text="TGO"
                                downChevron
                                changeIcon={collapsedItems.ast}
                                isButton
                                modalFunction={() => toggleCollapsible("ast")}
                            />

                            <Collapsible collapsed={collapsedItems.ast} align="center">
                                <FlatListStyled
                                    data={[
                                        {
                                            date: "17/02/2023",
                                            especiality: "25 U/L"
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
                                text="TGP"
                                downChevron
                                changeIcon={collapsedItems.alt}
                                isButton
                                modalFunction={() => toggleCollapsible("alt")}
                            />

                            <Collapsible collapsed={collapsedItems.alt} align="center">
                                <FlatListStyled
                                    data={[
                                        {
                                            date: "17/02/2023",
                                            especiality: "28 U/L"
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
                            </>
                        );
                    
                    }}
                />
                
                <Button onPress={() => navigation.navigate("ExamCamera")}>
                    <ButtonContainer>
                        <AddIconStyled />
                        <ButtonText>Adicionar</ButtonText>
                    </ButtonContainer>
                </Button>
            </View>
        </>
    );
}
