import React from "react";

import { Container, LoadIndicator } from "./styles";

type Props = {
    app?: boolean;
};

export function Loading({ app }: Props) {
    return (
        <>
            {app ? (
                <Container>
                    <LoadIndicator />
                </Container>
            ) : (
                <LoadIndicator />
            )}
        </>
    );
}
