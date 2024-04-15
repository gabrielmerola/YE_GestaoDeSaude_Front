import { Header } from "@components/Header";
import { VStack, useToast } from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

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
    TextRestricion,
    Image,
    ContainerInput
} from "./styles";

export default function Security() {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
    const [isValidationPassed, setIsValidationPassed] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
        useState(false);
    const toast = useToast();
    const restricion = [
        { id: "1", text: "No mínimo 6 caracteres" },
        { id: "2", text: "Ao menos uma letra maiúscula" },
        { id: "3", text: "Ao menos uma letra minúscula" },
        { id: "4", text: "Ao menos um caractere especial." }
    ];

    const validateInput = () => {
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            toast.show({
                title: "Erro",
                description: "Por favor, insira um endereço de email válido.",
                duration: 4000,
                placement: "top"
            });
            return;
        }

        setIsValidationPassed(true);
        toast.show({
            title: "Sucesso",
            description: "Dados encontrados e validados!",
            duration: 4000,
            placement: "top"
        });
    };

    const handleNewPasswordConfirmation = () => {
        if (newPassword !== newPasswordConfirm) {
            toast.show({
                title: "Erro",
                description: "As senhas não coincidem.",
                duration: 4000,
                placement: "top"
            });
            return;
        }

        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (!passwordRegex.test(newPassword)) {
            toast.show({
                title: "Erro",
                description: "A senha é inválida.",
                duration: 4000,
                placement: "top"
            });
            return;
        }

        toast.show({
            title: "Sucesso",
            description: "A senha foi atualizada com êxito!",
            duration: 4000,
            placement: "top"
        });

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
                    <ContainerInput>
                        <InputNewPassword
                            placeholder="Digite aqui..."
                            value={newPassword}
                            onChangeText={setNewPassword}
                            secureTextEntry={!isPasswordVisible}
                        />
                        <TouchableOpacity
                            onPress={() =>
                                setIsPasswordVisible(!isPasswordVisible)
                            }
                        >
                            <Image
                                source={
                                    isPasswordVisible
                                        ? require("../../../../assets/Visualizar.png")
                                        : require("../../../../assets/Ocultar.png")
                                }
                            />
                        </TouchableOpacity>
                    </ContainerInput>
                    <TextNewPasswordConfirm>
                        Confirmar Nova Senha:
                    </TextNewPasswordConfirm>

                    <ContainerInput>
                        <InputNewPasswordConfirm
                            placeholder="Digite aqui..."
                            value={newPasswordConfirm}
                            onChangeText={setNewPasswordConfirm}
                            secureTextEntry={!isConfirmPasswordVisible}
                        />
                        <TouchableOpacity
                            onPress={() =>
                                setIsConfirmPasswordVisible(
                                    !isConfirmPasswordVisible
                                )
                            }
                        >
                            <Image
                                source={
                                    isConfirmPasswordVisible
                                        ? require("../../../../assets/Visualizar.png")
                                        : require("../../../../assets/Ocultar.png")
                                }
                            />
                        </TouchableOpacity>
                    </ContainerInput>

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
