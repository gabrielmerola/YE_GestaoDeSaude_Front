import { Header } from "@components/Header";
import { VStack, ScrollView, View, Checkbox } from "native-base";

import {
    TextTitle,
    TextSubtitle,
    TextSubtitleWhite,
    TextNotificationWhite,
    TextSubtitleWhiteHour,
    Button,
    ButtonTextWhite,
    ViewCard
} from "./styles";

export default function Notification() {
    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center">
                <Header text="Notificações" isBackPress />

                <TextTitle>Hoje</TextTitle>

                <ViewCard>
                    <View flexDir="row">
                        <TextSubtitleWhite>Dipirona</TextSubtitleWhite>
                        <TextSubtitleWhiteHour>Horário</TextSubtitleWhiteHour>
                    </View>
                    <TextNotificationWhite>Período: 0/7</TextNotificationWhite>
                    <Button>
                        <ButtonTextWhite>Ver mais</ButtonTextWhite>
                    </Button>
                </ViewCard>

                <TextTitle>Amanhã</TextTitle>

                <ViewCard>
                    <View flexDir="row">
                        <TextSubtitleWhite>Dipirona</TextSubtitleWhite>
                        <TextSubtitleWhite>Horário</TextSubtitleWhite>
                    </View>
                    <TextNotificationWhite>Período: 1/7</TextNotificationWhite>

                    <Button>
                        <ButtonTextWhite>Ver mais</ButtonTextWhite>
                    </Button>
                </ViewCard>

                <TextTitle>08/04</TextTitle>

                <ViewCard>
                    <View flexDir="row">
                        <TextSubtitleWhite>Dipirona</TextSubtitleWhite>
                        <TextSubtitleWhite>Horário</TextSubtitleWhite>
                    </View>
                    <TextNotificationWhite>Período: 2/7</TextNotificationWhite>
                    <Button>
                        <ButtonTextWhite>Ver mais</ButtonTextWhite>
                    </Button>
                </ViewCard>
            </VStack>
        </ScrollView>
    );
}
