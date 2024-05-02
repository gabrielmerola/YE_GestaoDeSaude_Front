import { Header } from "@components/Header";
import { PopUpAddButton } from "@components/PopUpAddButton";
import { Table } from "@components/Table";
import { BloodPressureContext } from "@context/blood-pressure-context";
import { FlatList } from "native-base";
import React, { useContext, useEffect, useState } from "react";
import PopUp from "src/app/components/PopUp";

interface Pressure {
    [key: string]: string | number;
    id: number;
    data: string;
    medida: string;
    nivel: string;
}

export default function Pressure() {
    const [data, setData] = useState<Pressure[]>([]);
    const [showPopUp, setShowPopUp] = useState(false);
    const { getBloodPressure, postBloodPressure, deleteBloodPressure } =
        useContext(BloodPressureContext);

    const handleOpenPopUp = () => {
        setShowPopUp(true);
    };

    const handleClosePopUp = () => {
        setShowPopUp(false);
    };

    function loadData() {
        const fetchData = async () => {
            try {
                const pressureData = await getBloodPressure();

                const sortedData = pressureData.sort(
                    (a: Pressure, b: Pressure) => {
                        const dateA = new Date(a.date + "T00:00:01");
                        const dateB = new Date(b.date + "T00:00:01");
                        return dateA - dateB;
                    }
                );

                const formattedData = sortedData.map((item) => ({
                    ...item,
                    date: formatDate(item.date)
                }));

                setData(formattedData);
            } catch (error) {
                console.error("Error fetching glucose data:", error);
            }
        };
        fetchData();
    }

    const handlePost = (list: object) => {
        const response = postBloodPressure(list);
        response.then((json) => {
            console.log(json);
            loadData();
        });
    };
    const handleDelete = (id: number) => {
        const response = deleteBloodPressure(id);
        response.then((json) => {
            console.log(json);
            loadData();
        });
    };

    const formatDate = (dateString: Date) => {
        const date = new Date(dateString + "T00:00:01");
        const day = date.getDate().toString().padStart(2, "0"); // Get day with leading zero if needed
        const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Get month with leading zero if needed
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

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
