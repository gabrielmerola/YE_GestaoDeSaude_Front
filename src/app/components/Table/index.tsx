import { Cell, CellText, Container, Separator } from "@components/Table/styles";
import React from "react";

type Props = {
    rows: [object];
};

export function Table({ rows }: Props) {
    return (
        <>
            {rows.map((row) => (
                <Container>
                    <Cell type="gray">
                        <CellText type="gray">{row.data}</CellText>
                    </Cell>
                    <Cell type="green">
                        <CellText type="green">{row.medida}</CellText>
                    </Cell>
                    <Cell type="gray">
                        <CellText type="gray">{row.nivel}</CellText>
                    </Cell>
                </Container>
            ))}
            <Separator />
        </>
    );
}
