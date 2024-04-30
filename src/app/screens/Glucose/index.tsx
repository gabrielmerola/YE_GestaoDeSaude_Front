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
    data: string;
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

    const handlePost = (list: object) => {
        const response = postGlucose(list);
        response.then((json) => {
            console.log(json);
        });
    };

    const handleDelete = (id: number) => {
        const response = deleteGlucose(id);
        response.then((json) => {
            console.log(json);
        });
    };

    useEffect(() => {
        const data = getGlucose();
        data.then((data) => {
            setData(data);
        });
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
                    popUpType="GLUCOSE"
                />
            ) : (
                <></>
            )}
        </>
    );
}
