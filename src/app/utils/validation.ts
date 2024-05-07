import AsyncStorage from "@react-native-async-storage/async-storage";

export async function validateToken() {
    const tokenExpiration = await AsyncStorage.getItem("tokenExpiration");

    if (tokenExpiration) {
        const expirationDate = new Date(tokenExpiration);
        const currentDate = new Date();

        // Adiciona 3 dias à data atual
        const threeDaysLater = new Date();
        threeDaysLater.setDate(currentDate.getDate() + 3);

        // Verifica se a data de expiração do token é posterior a 3 dias após a data atual
        return expirationDate <= threeDaysLater;
    }

    // Se não houver data de expiração do token, o token não é válido
    return false;
}
