module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "module-resolver",
                {
                    root: ["./src/app"],
                    alias: {
                        "@assets": "./src/app/assets",
                        "@components": "./src/app/components",
                        "@routes": "./src/app/routes",
                        "@screens": "./src/app/screens",
                        "@utils": "./src/app/utils",
                        "@context": "./src/app/context",
                        "@interfaces": "./src/app/interfaces",
                        "@api": "./src/app/api"
                    }
                }
            ]
        ]
    };
};
