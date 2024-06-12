export const formatDate = (inputDate: string): string => {
    let formattedInput = inputDate.replace(/\D/g, "");

    switch (formattedInput.length) {
        case 1:
            formattedInput = /^([0-3])$/.test(formattedInput)
                ? `${formattedInput}`
                : "";
            break;

        case 2:
            formattedInput = /^(0[1-9]|[12][0-9]|3[01])$/.test(formattedInput)
                ? `${formattedInput}`
                : formattedInput.slice(0, 1);
            break;

        case 3:
            formattedInput = /^([01])/.test(formattedInput.slice(2, 3))
                ? `${formattedInput.slice(0, 2)}/${formattedInput.slice(2)}`
                : `${formattedInput.slice(0, 2)}`;
            break;

        case 4:
            const day = formattedInput.slice(0, 2);
            const month = formattedInput.slice(2, 4);

            if (
                /^(0[1-9]|[12][0-9]|3[01])$/.test(day) &&
                ((month !== "02" &&
                        month !== "04" &&
                        month !== "06" &&
                        month !== "09" &&
                        month !== "11") ||
                    (month === "02" && day <= "29") ||
                    ((month === "04" ||
                            month === "06" ||
                            month === "09" ||
                            month === "11") &&
                        day <= "30"))
            ) {
                formattedInput = `${formattedInput.slice(0, 2)}/${formattedInput.slice(2)}`;
            } else {
                formattedInput = `${formattedInput.slice(0, 2)}/${formattedInput.slice(2, 3)}`;
            }
            break;
        case 5:
            formattedInput = /^(2)/.test(formattedInput.slice(4, 5))
                ? `${formattedInput.slice(0, 2)}/${formattedInput.slice(2, 4)}/${formattedInput.slice(4)}`
                : `${formattedInput.slice(0, 2)}/${formattedInput.slice(2, 4)}`;
            break;

        case 6:
            formattedInput = /^(2[01])/.test(formattedInput.slice(4, 6))
                ? `${formattedInput.slice(0, 2)}/${formattedInput.slice(2, 4)}/${formattedInput.slice(4)}`
                : `${formattedInput.slice(0, 2)}/${formattedInput.slice(2, 4)}/${formattedInput.slice(4, 5)}`;
            break;

        case 7:
            formattedInput = /^(20[2-9]|21[0-9])/.test(
                formattedInput.slice(4, 7)
            )
                ? `${formattedInput.slice(0, 2)}/${formattedInput.slice(2, 4)}/${formattedInput.slice(4)}`
                : `${formattedInput.slice(0, 2)}/${formattedInput.slice(2, 4)}/${formattedInput.slice(4, 6)}`;
            break;

        case 8:
            const yearEnd = parseInt(formattedInput.slice(6, 8));
            if (
                /^(202[4-9]|20[3-9][0-9]|21[0-9][0-9])/.test(
                    formattedInput.slice(4, 8)
                ) &&
                (formattedInput.slice(0, 2) !== "29" || yearEnd % 4 === 0)
            ) {
                formattedInput = `${formattedInput.slice(0, 2)}/${formattedInput.slice(2, 4)}/${formattedInput.slice(4)}`;
            } else {
                formattedInput = `${formattedInput.slice(0, 2)}/${formattedInput.slice(2, 4)}/${formattedInput.slice(4, 7)}`;
            }
            break;

        default:
            break;
    }

    return formattedInput;
};