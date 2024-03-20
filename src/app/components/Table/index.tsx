import {
    Cell,
    CellColor,
    CellText,
    Container,
    Separator
} from "@components/Table/styles";
import React from "react";

type Props = {
    rows: string[][];
    type?: CellColor;
};

export function Table({ rows, type = "gray" }: Props) {
    return (
        <>
            {rows.map((row, index) => (
                <React.Fragment key={index}>
                    <Container>
                        {row.map((cellText, cellIndex) => (
                            <Cell
                                key={cellIndex}
                                type={cellIndex % 2 === 0 ? type : "green"}
                            >
                                <CellText
                                    type={cellIndex % 2 === 0 ? type : "green"}
                                >
                                    {cellText}
                                </CellText>
                            </Cell>
                        ))}
                    </Container>
                </React.Fragment>
            ))}
            <Separator />
        </>
    );
}
