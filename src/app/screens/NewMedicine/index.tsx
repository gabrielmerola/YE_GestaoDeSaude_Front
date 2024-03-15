import { Header } from "@components/Header";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Button, ChevronRightIcon } from "native-base";

export default function NewMedicine({ navigation }: any) {
    const medicines = [
        { id: 0, value: "Losartana", chevron: false },
        { id: 1, value: "08:00", chevron: true },
        { id: 2, value: "08hs", chevron: true },
        { id: 3, value: 1, chevron: true },
        { id: 4, chevron: true }
    ];

    return (
        <>
            <Header text={"Novo Medicamento"} isBackPress={true} />
            <View style={styles.container}>
                <Button variant={"unstyled"} style={styles.medicineItem}>
                    <View style={styles.medicineView}>
                        <Text style={{ fontSize: 18 }}>Nome: Nimesulida </Text>
                    </View>
                    <View style={styles.medicineView}>
                        <Text style={{ fontSize: 18 }}>Horário: 09:00</Text>
                        <ChevronRightIcon />
                    </View>
                    <View style={styles.medicineView}>
                        <Text style={{ fontSize: 18 }}>Período: 7 dias</Text>
                        <ChevronRightIcon />
                    </View>
                    <View style={styles.medicineView}>
                        <Text style={{ fontSize: 18 }}>Intervalo: 08hs</Text>
                        <ChevronRightIcon />
                    </View>
                    <Text style={{ fontSize: 18 }}>Quantidade: 1</Text>
                </Button>
            </View>
            <View style={styles.buttons}>
                <Button
                    variant={"unstyled"}
                    style={{ width: "50%" }}
                    onPress={() => navigation.navigate("NewMedicine")}
                >
                    <Text
                        style={styles.buttonText}
                        onPress={() => navigation.goBack()}
                    >
                        {" "}
                        Cancelar
                    </Text>
                </Button>
                <Button
                    variant={"unstyled"}
                    style={{ width: "50%", marginLeft: 2 }}
                    onPress={() => navigation.navigate("NewMedicine")}
                >
                    <Text
                        style={styles.buttonText}
                        onPress={() => navigation.goBack()}
                    >
                        {" "}
                        Salvar
                    </Text>
                </Button>
            </View>
        </>
    );
}
