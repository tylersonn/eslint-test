import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-unused-vars": "error",
      "react/jsx-uses-react": 0,
      "react/react-in-jsx-scope": 0,
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
      "no-console": "error",
      semi: ["error", "always"],
    },
  },
  {
    files: ["**/*.jsx"],
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
  ...fixupConfigRules(pluginReactConfig),
];
