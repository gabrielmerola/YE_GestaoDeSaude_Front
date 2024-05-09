import { Header } from "@components/Header";
import { PopUpAddButton } from "@components/PopUpAddButton";
import { Table } from "@components/Table";
import {
    BloodPressureContext,
    PressureType
} from "@context/blood-pressure-context";
import { FlatList } from "native-base";
import React, { useContext, useEffect, useState } from "react";
import PopUp from "src/app/components/PopUp";

export default function Pressure() {
    const [data, setData] = useState<PressureType[]>([]);
    const [showPopUp, setShowPopUp] = useState(false);
    const { getBloodPressure, postBloodPressure, deleteBloodPressure } =
        useContext(BloodPressureContext);

    const handleOpenPopUp = () => {
        setShowPopUp(true);
    };

    const handleClosePopUp = () => {
        setShowPopUp(false);
    };

    async function loadData() {
        try {
            const pressureData = await getBloodPressure();

            if (pressureData === undefined) {
                return;
            }

            pressureData.sort(function (a: PressureType, b: PressureType) {
                const firstDate = a.date.split("/").reverse().join("");
                const secondDate = b.date.split("/").reverse().join("");
                return firstDate.localeCompare(secondDate);
            });

            setData(pressureData);
        } catch (error) {
            console.error("Error fetching glucose data:", error);
        }
    }

    const handlePost = (list: object) => {
        const response = postBloodPressure(list);
        response.then((json) => {
            loadData();
        });
    };
    const handleDelete = (id: number) => {
        const response = deleteBloodPressure(id);
        response.then((json) => {
            loadData();
        });
    };

    // const formatDate = (dateString: string) => {
    //     const date = new Date(dateString + "T00:00:01");
    //     const day = date.getDate().toString().padStart(2, "0"); // Get day with leading zero if needed
    //     const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Get month with leading zero if needed
    //     const year = date.getFullYear();
    //     return `${day}/${month}/${year}`;
    // };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            <Header text="Pressão" isBackPress />

            <FlatList
                data={data}
                keyExtractor={(item) =>
                    "Pressure FlatList " + item.id.toString()
                }
                renderItem={({ item }) => <Table rows={[item]} />}
            />

            <PopUpAddButton onOpen={handleOpenPopUp} />

            {showPopUp ? (
                <PopUp
                    onClose={handleClosePopUp}
                    onPost={handlePost}
                    popUpType="PRESSURE"
                />
            ) : (
                <></>
            )}
        </>
    );
}
