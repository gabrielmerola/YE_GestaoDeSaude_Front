import { Header } from "@components/Header";
import { Table } from "@components/Table";
import { FlatList } from "native-base";
import React, { useState } from "react";

// const json = [
//     {
//         "data": "23/08/2024",
//         "medida": "12,3",
//         "nivel": "4"
//     },
//     {
//         "data": "23/08/2024",
//         "medida": "12,3",
//         "nivel": "4"
//     },
//     {
//         "data": "23/08/2024",
//         "medida": "12,3",
//         "nivel": "4"
//     },
//     {
//         "data": "23/08/2024",
//         "medida": "12,3",
//         "nivel": "4"
//     },
//     {
//         "data": "23/08/2024",
//         "medida": "12,3",
//         "nivel": "4"
//     },
//     {
//         "data": "23/08/2024",
//         "medida": "12,3",
//         "nivel": "4"
//     },
// ]

export default function Pressure() {
    // const [data, setData] = useState([{}])
    // setData(json)

    const [rows, setRows] = useState<string[][]>([
        ["Data", "Medida", "Nível"],
        ["05/04/2023", "120 x 80", "Normal"],
        ["06/04/2023", "110 x 70", "Normal"],
        ["07/04/2023", "150 x 100", "Alta"]
    ]);

    return (
        <>
            <Header text="Pressão Arterial" isBackPress />
            <FlatList
                data={rows}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => <Table rows={[item]} />}
            />
        </>
    );
}
