import { Header } from "@components/Header";
import { PopUpAddButton } from "@components/PopUpAddButton";
import { Table } from "@components/Table";
import { FlatList } from "native-base";
import React, { useEffect, useState } from "react";
import PopUp from "src/app/components/PopUp";

const json = [
    {
        id: 1,
        data: "Data",
        medida: "Medida",
        nivel: "Nível"
    },
    {
        id: 2,
        data: "05/04/2023",
        medida: "120 x 80",
        nivel: "Normal"
    },
    {
        id: 3,
        data: "06/04/2023",
        medida: "110 x 70",
        nivel: "Normal"
    },
    {
        id: 4,
        data: "07/04/2023",
        medida: "150 x 100",
        nivel: "Alta"
    }
];

export default function Pressure() {
    const [data, setData] = useState<any[]>([]);
    const [showPopUp, setShowPopUp] = useState(false);

    const handleOpenPopUp = () => {
        setShowPopUp(true);
    };

    const handleClosePopUp = () => {
        setShowPopUp(false);
    };

    const handlePost = (date: string, measure: string) => {
        json.push({
            id: json.findLastIndex((value) => value.id) + 1,
            data: date,
            medida: measure,
            nivel: "Normal"
        });
    };

    json.findLastIndex((value) => value.id);

    useEffect(() => {
        setData(json);
    }, []);

    return (
        <>
            <Header text="Pressão Arterial" isBackPress />

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Table rows={[item]} />}
            />

            <PopUpAddButton onOpen={handleOpenPopUp} />

            {showPopUp ? (
                <PopUp onClose={handleClosePopUp} onPost={handlePost} />
            ) : (
                <></>
            )}
        </>
    );
}
