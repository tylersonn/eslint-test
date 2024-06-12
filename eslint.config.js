import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

export default [
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
        eqeqeq: "off",
        "no-unused-vars": "error",
        "prefer-const": ["error", { "ignoreReadBeforeAssign": true }],
        "no-console": "error",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "semi": ["error", "always"],
    }
},
  pluginJs.configs.recommended,
  {
    files: ["**/*.jsx"],
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
  ...fixupConfigRules(pluginReactConfig),
];
