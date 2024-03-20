import BottomAddButton from "@components/BottomAddButton";
import { Header } from "@components/Header";
import MedicinesAndButton from "@components/MedicinesAndButton";
import { View } from "@screens/ExamsHistory/styles";

export default function ExamsHistory({ navigation }: any) {
    return (
        <>
            <Header text="Histórico de Exames" isBackPress />
            <View>
                <MedicinesAndButton
                    text="Hemograma"
                    chevron
                    screenName="ExamsHeld"
                    navigation={navigation}
                />
                <MedicinesAndButton
                    text="Colesterol Total"
                    chevron
                    screenName="ExamsHeld"
                    navigation={navigation}
                />
                <MedicinesAndButton
                    text="Glicose"
                    chevron
                    screenName="ExamsHeld"
                    navigation={navigation}
                />
                <MedicinesAndButton
                    text="TGO"
                    chevron
                    screenName="ExamsHeld"
                    navigation={navigation}
                />
                <MedicinesAndButton
                    text="TGP"
                    chevron
                    screenName="ExamsHeld"
                    navigation={navigation}
                />
            </View>
            <BottomAddButton
                navigation={navigation}
                screenName="ExamsDetected"
            />
        </>
    );
}
