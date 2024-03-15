import { Header } from "@components/Header";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Button, ChevronRightIcon } from "native-base";

export default function Medicines({ navigation }: any) {
    const medicines = [
        { id: "1", name: "Losartana", time: "08:00" },
        { id: "2", name: "Hidroclorotiazida", time: "08:00" },
        { id: "3", name: "Pantoprazol", time: "12:00" }
    ];

    return (
        <>
            <Header text={"Medicamentos"} isBackPress={true} />
            <View style={styles.container}>
                <FlatList
                    data={medicines}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Button
                            variant={"unstyled"}
                            style={styles.medicineItem}
                        >
                            <View style={styles.medicineView}>
                                <Text style={{ fontSize: 18 }}>
                                    {item.name}: {item.time}
                                </Text>
                                <ChevronRightIcon />
                            </View>
                        </Button>
                    )}
                />
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => navigation.navigate("NewMedicine")}
                >
                    <Text style={styles.buttonText}>
                        <Text style={styles.plusText}>+</Text> Adicionar
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    );
}
