import { MedicineContext } from "@context/medicine_context";
import { Medicine } from "@screens/Medicines";
import React, { useContext } from "react";

import { Container, ButtonText, Button } from "./styles";

interface CancelAndSaveButtonProps {
    medicineData: Medicine[];
    onPress: () => void;
}

const CancelAndSaveButton = ({
    onPress,
    medicineData
}: CancelAndSaveButtonProps) => {
    const { createMedicine } = useContext(MedicineContext);
    const parsedMedicines = medicineData.map((med: any) => ({
        id: med.id,
        name: med.name,
        dosage: med.dosage,
        period: med.period,
        quantity: med.quantity,
        time: med.time
    }));

    const handleSave = async () => {
        try {
            const response = await createMedicine(parsedMedicines);
            console.log("Medication created:", response);
            onPress();
        } catch (error) {
            console.error("Error creating medication:", error);
        }
    };

    return (
        <Container>
            <Button onPress={onPress}>
                <ButtonText>Cancelar</ButtonText>
            </Button>
            <Button onPress={handleSave}>
                <ButtonText>Salvar</ButtonText>
            </Button>
        </Container>
    );
};

export default CancelAndSaveButton;
