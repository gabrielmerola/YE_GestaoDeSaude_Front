import { View } from "native-base";

import {
    BoldText,
    Container,
    SecContainer,
    ThirdContainer,
    Txt,
    TxtSubTitle
} from "./styles";

interface CardProps {
    title: string;
    description: string;
    subTitle: string;
    secDescription: string;
    subDescription: string;
    color: string;
}

export function Card({
    title,
    description,
    subTitle,
    secDescription,
    subDescription,
    color
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
                    <BoldText>{secDescription}</BoldText>
                    <BoldText>{subDescription}</BoldText>
                </View>
            </ThirdContainer>
        </Container>
    );
}
