import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

/** A view is entered only through its public entry point (views/<name>/index.ts). */
const PUBLIC_ENTRY_ONLY = {
  group: ["@/views/*/*"],
  message: "Import a view through its public entry point: @/views/<name>.",
};

/** Views stay independent; shared code lives in components/, hooks/ or lib/. */
const NO_SIBLING_VIEWS = {
  group: ["@/views/*"],
  message: "Views never import each other. Move shared code to components/, hooks/ or lib/.",
};

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      "react/no-danger": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "no-restricted-imports": ["error", { patterns: [PUBLIC_ENTRY_ONLY] }],
    },
  },
  {
    files: ["views/**/*.{ts,tsx}"],
    rules: { "no-restricted-imports": ["error", { patterns: [NO_SIBLING_VIEWS] }] },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts", "playwright-report/**", "test-results/**"]),
]);

export default eslintConfig;
