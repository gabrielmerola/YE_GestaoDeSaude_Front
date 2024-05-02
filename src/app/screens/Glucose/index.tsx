import { Header } from "@components/Header";
import { PopUpAddButton } from "@components/PopUpAddButton";
import { Table } from "@components/Table";
import { GlucoseContext } from "@context/glucose_context";
import { FlatList } from "native-base";
import React, { useContext, useEffect, useState } from "react";
import PopUp from "src/app/components/PopUp";

interface Glucose {
    [key: string]: string | number;
    id: number;
    date: string;
    measure: string;
    level: string;
}

export default function Glucose() {
    const [data, setData] = useState<Glucose[]>([]);
    const [showPopUp, setShowPopUp] = useState(false);
    const { getGlucose, postGlucose, deleteGlucose } =
        useContext(GlucoseContext);

    const handleOpenPopUp = () => {
        setShowPopUp(true);
    };

    const handleClosePopUp = () => {
        setShowPopUp(false);
    };

    function loadData() {
        const fetchData = async () => {
            try {
                const glucoseData = await getGlucose();

                const sortedData = glucoseData.sort(
                    (a: Glucose, b: Glucose) => {
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
        const response = postGlucose(list);
        response.then((json) => {
            console.log(json);
            loadData();
        });
    };

    const handleDelete = (id: number) => {
        const response = deleteGlucose(id);
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
            <Header text="Glicemia" isBackPress />

            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Table rows={[item]} />}
            />

            <PopUpAddButton onOpen={handleOpenPopUp} onDelete={() => {}} />

            {showPopUp ? (
                <PopUp
                    onClose={handleClosePopUp}
                    onPost={handlePost}
                    onUpdate={loadData}
                    popUpType="GLUCOSE"
                />
            ) : (
                <></>
            )}
        </>
    );
}
