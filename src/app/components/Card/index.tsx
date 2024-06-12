import { View } from "native-base";

import {
    BoldText,
    Container,
    SecContainer,
    ThirdContainer,
    Txt,
    TxtSubTitle
} from "./styles";
import {Loading} from "@components/Loading";

interface CardProps {
    title: string;
    description: string;
    subTitle: string;
    secDescription: string;
    subDescription: string;
    color: string;
    isLoading: boolean;
}

export function Card({
    title,
    description,
    subTitle,
    secDescription,
    subDescription,
    color,
                         isLoading
}: CardProps) {
    return (
        <Container $color={color}>
            <SecContainer>
                <Txt>{title}</Txt>
                <Txt>{description}</Txt>
            </SecContainer>
            <ThirdContainer>
                <TxtSubTitle>{subTitle}</TxtSubTitle>

                <View>
                    {isLoading ?
                        <Loading card={true}/> :
                        <>
                            <BoldText>{secDescription}</BoldText>
                            <BoldText>{subDescription}</BoldText>
                        </>
                    }
                </View>
            </ThirdContainer>
        </Container>
    );
}
