module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "vue/multi-word-component-names": "off",
        "no-unused-vars": "off",
        "no-constant-condition": "off"
    }
}
