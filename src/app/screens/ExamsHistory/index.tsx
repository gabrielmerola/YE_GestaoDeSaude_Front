import CancelAndSaveButton from "@components/CancelAndSaveButton";
import { Header } from "@components/Header";
import { PopUpAddButton } from "@components/PopUpAddButton";
import { Table } from "@components/Table";
import {
    View,
    ButtonContainer,
    ModalContainer,
    FlatListStyled
} from "@screens/ExamsHistory/styles";
import React, { useState } from "react";
import Collapsible from "react-native-collapsible";
import ListInteractableItem from "src/app/components/ListInteractableItem";

export default function ExamsHistory() {
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
                                especialty: "4.500.000/mm³"
                            }
                        ]}
                        keyExtractor={(item) => item.date}
                        renderItem={({ item }) => <Table rows={[item]} />}
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
                                especialty: "25 U/L"
                            }
                        ]}
                        keyExtractor={(item) => item.date}
                        renderItem={({ item }) => <Table rows={[item]} />}
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
                                especialty: "79 mg/dl"
                            }
                        ]}
                        keyExtractor={(item) => item.date}
                        renderItem={({ item }) => <Table rows={[item]} />}
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
                                especialty: "25 U/L"
                            }
                        ]}
                        keyExtractor={(item) => item.date}
                        renderItem={({ item }) => <Table rows={[item]} />}
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
                                especialty: "28 U/L"
                            }
                        ]}
                        keyExtractor={(item) => item.date}
                        renderItem={({ item }) => <Table rows={[item]} />}
                    />
                </Collapsible>
            </View>
            <ButtonContainer>
                <PopUpAddButton
                    onOpen={() => {
                        setShowExamsDetected(true);
                        setCollapsedItems({
                            glucose: true,
                            hemogram: true,
                            cholesterol: true,
                            ast: true,
                            alt: true
                        });
                    }}
                />
            </ButtonContainer>

            {showExamsDetected ? (
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
                                        especialty: "4.500.000/mm³"
                                    }
                                ]}
                                keyExtractor={(item) => item.date}
                                renderItem={({ item }) => (
                                    <Table rows={[item]} />
                                )}
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
                                        especialty: "25 U/L"
                                    }
                                ]}
                                keyExtractor={(item) => item.date}
                                renderItem={({ item }) => (
                                    <Table rows={[item]} />
                                )}
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
                                        especialty: "79 mg/dl"
                                    }
                                ]}
                                keyExtractor={(item) => item.date}
                                renderItem={({ item }) => (
                                    <Table rows={[item]} />
                                )}
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
                                        especialty: "25 U/L"
                                    }
                                ]}
                                keyExtractor={(item) => item.date}
                                renderItem={({ item }) => (
                                    <Table rows={[item]} />
                                )}
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
                                        especialty: "28 U/L"
                                    }
                                ]}
                                keyExtractor={(item) => item.date}
                                renderItem={({ item }) => (
                                    <Table rows={[item]} />
                                )}
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
            )}
        </>
    );
}
