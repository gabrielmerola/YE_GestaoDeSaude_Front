import { Header } from "@components/Header";
import { PopUpAddButton } from "@components/PopUpAddButton";
import { Table } from "@components/Table";
import { PressureType } from "@context/blood-pressure-context";
import { GlucoseContext, GlucoseType } from "@context/glucose_context";
import { FlatList } from "native-base";
import { useContext, useEffect, useState } from "react";
import PopUp from "src/app/components/PopUp";

export default function Glucose() {
    const [data, setData] = useState<GlucoseType[]>([]);
    const [showPopUp, setShowPopUp] = useState(false);
    const { getGlucose, postGlucose, deleteGlucose } =
        useContext(GlucoseContext);

    const handleOpenPopUp = () => {
        setShowPopUp(true);
    };

    const handleClosePopUp = () => {
        setShowPopUp(false);
    };

    async function loadData() {
        try {
            const glucoseData = await getGlucose();

            if (glucoseData === undefined) {
                return;
            }

            glucoseData.sort(function (a: PressureType, b: PressureType) {
                const firstDate = a.date.split("/").reverse().join("");
                const secondDate = b.date.split("/").reverse().join("");
                return firstDate.localeCompare(secondDate);
            });

            setData(glucoseData);
        } catch (error) {
            console.error("Error fetching glucose data:", error);
        }
    }

    const handlePost = (list: object) => {
        const response = postGlucose(list);
        response.then((json) => {
            loadData();
        });
    };

    const handleDelete = (id: number) => {
        const response = deleteGlucose(id);
        response.then((json) => {
            loadData();
        });
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
                    popUpType="GLUCOSE"
                />
            ) : (
                <></>
            )}
        </>
    );
}
