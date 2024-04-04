import { Header } from "@components/Header";
import { VStack } from "native-base";
import React, { useState } from "react";
import { Alert } from "react-native";

import {
    Text,
    ContainerValidation,
    TextValidationEmail,
    InputEmail,
    ButtonConfirm,
    ButtonText,
    InputNewPasswordConfirm,
    TextNewPasswordConfirm,
    ContainerNewPassword,
    TextNewPassword,
    InputNewPassword,
    TextPasswordRestricion,
    TextRestricion
} from "./styles";

export default function Security() {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
    const [isValidationPassed, setIsValidationPassed] = useState(false);
    const restricion = [
        { id: "1", text: "No mínimo 6 caracteres" },
        { id: "2", text: "Ao menos uma letra maiúscula" },
        { id: "3", text: "Ao menos uma letra minúscula" },
        { id: "4", text: "Ao menos um caractere especial." }
        // Adicione mais itens conforme necessário
    ];

    const validateInput = () => {
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            Alert.alert(
                "Erro",
                "Por favor, insira um endereço de email válido."
            );
            return;
        }

        setIsValidationPassed(true);
        Alert.alert("Sucesso", "Dados encontrados e validados!");
    };

    const handleNewPasswordConfirmation = () => {
        if (newPassword !== newPasswordConfirm) {
            Alert.alert("Erro", "As senhas não coincidem.");
            return;
        }

        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (!passwordRegex.test(newPassword)) {
            Alert.alert("Erro", "A senha é inválida.");
            return;
        }

        Alert.alert("Sucesso", "A senha foi atualizada com êxito!");
        setEmail("");
        setNewPassword("");
        setNewPasswordConfirm("");
        setIsValidationPassed(false);
    };

    return (
        <VStack>
            <Header text="Segurança" isBackPress />
            {isValidationPassed ? (
                <ContainerNewPassword>
                    <TextNewPassword>Nova Senha:</TextNewPassword>
                    <InputNewPassword
                        placeholder="Digite aqui..."
                        value={newPassword}
                        onChangeText={setNewPassword}
                    />
                    <TextNewPasswordConfirm>
                        Confirmar Nova Senha:
                    </TextNewPasswordConfirm>
                    <InputNewPasswordConfirm
                        placeholder="Digite aqui..."
                        value={newPasswordConfirm}
                        onChangeText={setNewPasswordConfirm}
                    />
                    <TextPasswordRestricion>
                        A senha deve conter:{" "}
                    </TextPasswordRestricion>
                    {restricion.map((item) => (
                        <TextRestricion key={item.id}>
                            {item.text}
                        </TextRestricion>
                    ))}
                    <ButtonConfirm onPress={handleNewPasswordConfirmation}>
                        <ButtonText>Confirmar</ButtonText>
                    </ButtonConfirm>
                </ContainerNewPassword>
            ) : (
                <>
                    <Text>
                        Preencha o campo para realizar a alteração da senha:
                    </Text>
                    <ContainerValidation>
                        <TextValidationEmail>Email:</TextValidationEmail>
                        <InputEmail
                            placeholder="Digite aqui..."
                            value={email}
                            onChangeText={setEmail}
                        />
                        <ButtonConfirm onPress={validateInput}>
                            <ButtonText>Confirmar</ButtonText>
                        </ButtonConfirm>
                    </ContainerValidation>
                </>
            )}
        </VStack>
    );
}
