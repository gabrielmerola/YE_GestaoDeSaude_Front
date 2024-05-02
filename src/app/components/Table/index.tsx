import { Cell, CellText, Container, Separator } from "@components/Table/styles";

interface Row {
    [key: string]: string | number;
}

type Props = {
    rows: Row[];
};

export function Table({ rows }: Props) {
    return (
        <>
            <Separator />
            {rows.map((row, index) => (
                <Container key={"tableKey " + index}>
                    {Object.keys(row).map((key: string, index: number) => {
                        if (key === "id") {
                            return null;
                        }
                        return (
                            <Cell
                                key={"Child Cell " + index}
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
