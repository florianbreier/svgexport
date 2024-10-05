const js=require("@eslint/js");
const globals =require("globals");

module.exports = [
    js.configs.recommended,
    {
        rules: {
            "no-unused-vars": ["error", { caughtErrorsIgnorePattern: "^_|^err$", argsIgnorePattern: "^_" }]
        },
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            }
        }
    }
]