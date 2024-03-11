const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = {
    resolver: {
        assetExts: ["png", "jpg", "jpeg", "gif", "svg"] // Adicione ou ajuste as extensões conforme necessário
    }
};
