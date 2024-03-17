import { Header } from "@components/Header";
import { View } from "react-native";
import { styles } from "./styles";
import MedicinesAndButton from "@components/MedicinesAndButton";
import CancelAndSaveButton from "@components/CancelAndSaveButton";
import BottomAddButton from "@components/BottomAddButton";

export default function ExamsHistory({ navigation }: any) {
    return (
        <>
            <Header text={"Histórico de Exames"} isBackPress={true} />
            <View style={styles.container}>
                <MedicinesAndButton
                    text={"Hemograma"}
                    chevron={true}
                    screenName={"ExamsHeld"}
                    navigation={navigation}
                />
                <MedicinesAndButton
                    text={"Colesterol Total"}
                    chevron={true}
                    screenName={"ExamsHeld"}
                    navigation={navigation}
                />
                <MedicinesAndButton
                    text={"Glicose"}
                    chevron={true}
                    screenName={"ExamsHeld"}
                    navigation={navigation}
                />
                <MedicinesAndButton
                    text={"TGO"}
                    chevron={true}
                    screenName={"ExamsHeld"}
                    navigation={navigation}
                />
                <MedicinesAndButton
                    text={"TGP"}
                    chevron={true}
                    screenName={"ExamsHeld"}
                    navigation={navigation}
                />
            </View>
            <BottomAddButton
                navigation={navigation}
                screenName={"ExamsDetected"}
            />
        </>
    );
}
