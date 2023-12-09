module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,jsx,mjs,cjs,ts,tsx}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
            HTMLImageElement: true
          },
        },
    },
    "rules": {
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
    }
}
