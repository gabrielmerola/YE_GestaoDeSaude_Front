import {
    Container,
    ContainerTxt,
    styles,
    Txt
} from "@components/Header/styles";
import { useNavigation } from "@react-navigation/native";
import { Button, ChevronLeftIcon } from "native-base";
import React from "react";
import { View } from "react-native";

interface HeaderProps {
    text?: string;
    isBackPress?: boolean;
    isOptionMenu?: boolean;
}

export const Header = ({ text, isBackPress, isOptionMenu }: HeaderProps) => {
    const navigation = useNavigation();
    return (
        <Container>
            {isBackPress && (
                <Button variant="unstyled" onPress={() => navigation.goBack()}>
                    <View style={styles.container}>
                        <ChevronLeftIcon
                            name="chevron-left"
                            type="FontAwesome5"
                            style={styles.icon}
                            size="lg"
                        />
                        <View style={styles.ball} />
                    </View>
                </Button>
            )}

            {isOptionMenu && (
                <Button variant="unstyled">
                    <View style={styles.container}>
                        <ChevronLeftIcon
                            name="chevron-left"
                            type="FontAwesome5"
                            style={styles.icon}
                            size="lg"
                        />
                        <View style={styles.ball} />
                    </View>
                </Button>
            )}
            <ContainerTxt>
                <Txt>{text}</Txt>
            </ContainerTxt>
        </Container>
    );
};
