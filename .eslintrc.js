module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
    },
    "extends": [
        // "eslint:recommended", off according mentor recommendation
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 'latest',
        "sourceType": "module",
        "project": "./tsconfig.json",
    },
    "plugins": ["prettier", "@typescript-eslint"],
    "rules": {
        "no-restricted-syntax": ["off", "FunctionExpression", "WithStatement", "BinaryExpression[operator='of']"],
        'import/extensions': "off",
        "prettier/prettier": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "accessibility": "explicit",
                "overrides": {
                    "accessors": "explicit",
                    "constructors": "off",
                    "methods": "explicit",
                    "properties": "explicit",
                    "parameterProperties": "explicit",
                }
            }
        ],
        "max-lines-per-function": ['error', 40],
        "@typescript-eslint/member-ordering": [
            "error",
            {
              "default": [
                "field",
                "signature",
                "constructor",
                "method"
              ]
            }
          ],
        "import/prefer-default-export": [ "off"]
    },
};
