import { defineConfig } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import tailwind from "eslint-plugin-tailwindcss";

export default defineConfig([
  ...nextCoreWebVitals,
  ...tailwind.configs["flat/recommended"],
]);