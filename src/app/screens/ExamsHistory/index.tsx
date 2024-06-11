import CancelAndSaveButton from "@components/CancelAndSaveButton";
import { Header } from "@components/Header";
import { PopUpAddButton } from "@components/PopUpAddButton";
import { Table } from "@components/Table";
import {
    View,
    Button,
    ModalContainer,
    FlatListStyled,
    ButtonContainer,
    AddIconStyled,
    ButtonText
} from "@screens/ExamsHistory/styles";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import ListInteractableItem from "src/app/components/ListInteractableItem";

interface Exams {
    date: string;
    especiality: string;
}

type Row = {
    [key: string]: string;
};

// TODO: fazer o map que acabe com os códigos repetidos
export default function ExamsHistory({ navigation }: any) {
    const [showExamsDetected, setShowExamsDetected] = useState(false);

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

                <Button onPress={() => navigation.navigate("ExamCamera")}>
                    <ButtonContainer>
                        <AddIconStyled />
                        <ButtonText>Adicionar</ButtonText>
                    </ButtonContainer>
                </Button>
            </View>

            {/* {showExamsDetected ? (
                <ModalContainer>
                    <Header
                        text="Exames Detectados"
                        isModal
                        onModalClose={() => {
                            setShowExamsDetected(false);
                            setCollapsedItems({
                                glucose: true,
                                hemogram: true,
                                cholesterol: true,
                                ast: true,
                                alt: true
                            });
                        }}
                    />
                    <View>
                        <ListInteractableItem
                            text="Hemograma"
                            downChevron
                            changeIcon={collapsedItems.hemogram}
                            isButton
                            modalFunction={() => toggleCollapsible("hemogram")}
                        />

                        <Collapsible
                            collapsed={collapsedItems.hemogram}
                            align="center"
                        >
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
                            modalFunction={() =>
                                toggleCollapsible("cholesterol")
                            }
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

                        <Collapsible
                            collapsed={collapsedItems.glucose}
                            align="center"
                        >
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

                        <Collapsible
                            collapsed={collapsedItems.ast}
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
                            text="TGP"
                            downChevron
                            changeIcon={collapsedItems.alt}
                            isButton
                            modalFunction={() => toggleCollapsible("alt")}
                        />

                        <Collapsible
                            collapsed={collapsedItems.alt}
                            align="center"
                        >
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
                    </View>
                    <CancelAndSaveButton
                        onPress={() => {
                            setShowExamsDetected(false);
                            setCollapsedItems({
                                glucose: true,
                                hemogram: true,
                                cholesterol: true,
                                ast: true,
                                alt: true
                            });
                        }}
                    />
                </ModalContainer>
            ) : (
                <></>
            )} */}
        </>
    );
}
