module.exports = {
    env: {
        "browser": true,
        "es2021": true,
        "jest": true,
        "node": true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jest/recommended",
        "plugin:testing-library/react"
    ],
    parser: "@babel/eslint-parser",
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    parserOptions: {
        "requireConfigFile": false,
        "sourceType": "module"
    },
    rules: {
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    }
};
