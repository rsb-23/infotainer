import vue from "eslint-plugin-vue";

export default [
  {
    files: ["*.js", "*.mjs", "*.vue"],
    ignores: ["dist", "node_modules"],
  },
  {
    files: ["*.vue"],
    languageOptions: {
      parser: vue.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      vue,
    },
    rules: {
      ...vue.configs["vue3-recommended"].rules,
    },
  },
  {
    files: ["*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    },
  },
];
