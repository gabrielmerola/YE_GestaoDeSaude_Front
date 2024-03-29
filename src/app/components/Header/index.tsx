import { Container, View, Txt, Ball } from "@components/Header/styles";
import { useNavigation } from "@react-navigation/native";
import { Button, ChevronLeftIcon } from "native-base";
import React from "react";

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
                    <View>
                        <ChevronLeftIcon
                            style={{ color: "#fff" }}
                            name="chevron-left"
                            type="FontAwesome5"
                            size="lg"
                        />
                        <Ball />
                    </View>
                </Button>
            )}

            {isOptionMenu && (
                <Button variant="unstyled">
                    <View>
                        <ChevronLeftIcon
                            style={{ color: "#fff" }}
                            name="chevron-left"
                            type="FontAwesome5"
                            size="lg"
                        />
                        <Ball />
                    </View>
                </Button>
            )}
            <Txt>{text}</Txt>
        </Container>
    );
};
