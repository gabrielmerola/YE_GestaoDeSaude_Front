import { Cell, CellText, Container, Separator } from "@components/Table/styles";
import React from "react";

type Props = {
    rows: [object];
};

export function Table({ rows }: Props) {
    return (
        <>
            <Separator />
            {rows.map((row, index) => (
                <Container key={index}>
                    {Object.keys(row).map((key, index) => {
                        if (key === "id") {
                            return null;
                        }
                        return (
                            <Cell
                                type={
                                    Object.keys(row).length == 2
                                        ? index % 2 == 0
                                            ? "green"
                                            : "dark-gray"
                                        : index % 2 == 0
                                          ? "green"
                                          : "gray"
                                }
                            >
                                <CellText
                                    adjustsFontSizeToFit
                                    numberOfLines={2}
                                    type={
                                        Object.keys(row).length == 2
                                            ? "green"
                                            : index % 2 == 0
                                              ? "green"
                                              : "gray"
                                    }
                                >
                                    {row[key]}
                                </CellText>
                            </Cell>
                        );
                    })}
                </Container>
            ))}
        </>
    );
}
