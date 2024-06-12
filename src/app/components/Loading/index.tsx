import React from "react";

import {Container, LoadIndicator, LoadIndicatorWhite} from "./styles";

type Props = {
    app?: boolean;
    card?: boolean;
};

export function Loading({ app, card}: Props) {
    return (
        <>
            {app ? (
                <Container>
                    <LoadIndicator />
                </Container>
            ) : (
                card ?
                <LoadIndicatorWhite />
                    :
                    <LoadIndicator/>
            )}
        </>
    );
}
