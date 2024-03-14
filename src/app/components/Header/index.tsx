import React from "react";
import { View } from "react-native";
import { Button, ChevronLeftIcon } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Container, styles, Txt } from "@components/Header/styles";

interface HeaderProps {
    text?: string;
    fodasse?: () => void;
    isBackPress?: boolean;
    isOptionMenu?: boolean;
}

export const Header = ({
    text,
    isBackPress,
    isOptionMenu,
    fodasse
}: HeaderProps) => {
    const navigation = useNavigation();
    return (
        <Container>
            {isBackPress && (
                <Button
                    variant={"unstyled"}
                    onPress={() => navigation.goBack()}
                >
                    <View style={styles.container}>
                        <ChevronLeftIcon
                            name="chevron-left"
                            type="FontAwesome5"
                            style={styles.icon}
                            size={"lg"}
                        />
                        <View style={styles.ball}></View>
                    </View>
                </Button>
            )}

            {isOptionMenu && (
                <Button variant={"unstyled"} onPress={() => fodasse}>
                    <View style={styles.container}>
                        <ChevronLeftIcon
                            name="chevron-left"
                            type="FontAwesome5"
                            style={styles.icon}
                            size={"lg"}
                        />
                        <View style={styles.ball}></View>
                    </View>
                </Button>
            )}
            <Container>
                <Txt>{text}</Txt>
            </Container>
            <View style={{ flex: 1 }} />
        </Container>
    );
};
