import { defineConfig } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import tailwind from "eslint-plugin-tailwindcss";

export default defineConfig([
  ...nextCoreWebVitals,
  tailwind.configs.recommended,
  {
    plugins: {
      tailwindcss: tailwind,
    },
    settings: {
      tailwindcss: {
        cssConfigPath: "./src/styles/globals.css",
      },
    },
    rules: {
      "tailwindcss/no-custom-classname": [
        "warn",
        { whitelist: ["(?:hover:)?scale-1\\.01"] },
      ],
    },
  },
]);
