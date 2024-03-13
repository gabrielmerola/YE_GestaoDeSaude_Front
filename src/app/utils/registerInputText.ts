const sections = [
    {
        id: 1,
        title: "Insira alguns dados básicos",
        inputText: [
            {
                id: 1,
                label: "Nome",
                placeholder: "Digite seu nome completo"
            },
            {
                id: 2,
                label: "Email",
                placeholder: "Digite seu e-mail completo"
            },
            {
                id: 3,
                label: "Crie uma senha",
                placeholder: "Insira sua senha"
            },
            {
                id: 4,
                label: "Repita a senha",
                placeholder: "Insira sua senha"
            }
        ],
        checkbox: []
    },
    {
        id: 2,
        title: "Agora, mais alguns dados sobre você",
        inputText: [
            {
                id: 1,
                label: "CEP",
                placeholder: "Digite seu CEP"
            },
            {
                id: 2,
                label: "Endereço",
                placeholder: "Insira seu endereço"
            },
            {
                id: 3,
                label: "Numero",
                placeholder: "Insira seu numero"
            },
            {
                id: 4,
                label: "Complemento",
                placeholder: "Insira seu complemento"
            },
            {
                id: 5,
                label: "Telefone",
                placeholder: "(00)00000-0000"
            }
        ],
        checkbox: []
    },
    {
        id: 3,
        title: "Para finalizar, quais são os seus planos?",
        subTitle: "Selecione seu plano:",
        inputText: [],
        checkbox: [
            {
                id: 1,
                value: "Sulamerica"
            },
            {
                id: 2,
                value: "Unimed"
            },
            {
                id: 3,
                value: "Bradesco"
            },
            {
                id: 4,
                value: "Amil"
            },
            {
                id: 5,
                value: "Biosaúde"
            },
            {
                id: 6,
                value: "Unimed"
            },
            {
                id: 7,
                value: "Biovida"
            },
            {
                id: 8,
                value: "Outros"
            },
            {
                id: 9,
                value: "Não tenho plano"
            }
        ]
    }
];

export { sections };
