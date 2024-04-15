const sections = {
    id: 1,
    title: "Insira alguns dados básicos",
    inputText: [
        {
            id: 1,
            label: "Nome:",
            placeholder: "Digite seu nome completo",
            name: "name"
        },
        {
            id: 2,
            label: "Email:",
            placeholder: "Digite seu e-mail completo",
            name: "email"
        },
        {
            id: 3,
            label: "Crie uma senha:",
            placeholder: "Insira sua senha",
            secureTextEntry: true,
            name: "password"
        },
        {
            id: 4,
            label: "Confirme sua senha:",
            placeholder: "Insira sua senha",
            secureTextEntry: true,
            name: "password_confirm"
        }
    ]
};

export { sections };
