import { Header } from "@components/Header";
import { PopUpAddButton } from "@components/PopUpAddButton";
import { Table } from "@components/Table";
import { GlucoseContext } from "@context/glucose_context";
import { FlatList } from "native-base";
import React, { useContext, useEffect, useState } from "react";
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
        medida: "80",
        nivel: "Normal"
    },
    {
        id: 3,
        data: "06/04/2023",
        medida: "150",
        nivel: "Alta"
    },
    {
        id: 4,
        data: "07/04/2023",
        medida: "100",
        nivel: "Normal"
    }
];

interface Glucose {
    id: number;
    data: string;
    measure: string;
    level: string;
}

export default function Glucose() {
    const [data, setData] = useState<Glucose[]>([]);
    const [showPopUp, setShowPopUp] = useState(false);
    const { getGlucose, postGlucose } = useContext(GlucoseContext);

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

    json.findLastIndex((value) => value.id);

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
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Table rows={[item]} />}
            />

            {/* <FlatList
                data={data}
                keyExtractor={(item) =>
                    "Pressure FlatList " + item.id.toString()
                }
                renderItem={({ item }) => <Table rows={[item]} />}
            /> */}

            <PopUpAddButton onOpen={handleOpenPopUp} />

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
