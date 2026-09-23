import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      "@": path.join(projectRoot, "src"),
    },
  },
  test: {
    clearMocks: true,
    environment: "node",
    exclude: ["node_modules", ".next", "coverage", "out", "build"],
    include: ["**/*.{test,spec}.{cjs,js,jsx,mjs,ts,tsx}"],
    restoreMocks: true,
    setupFiles: ["./vitest.setup.ts"],
    unstubGlobals: true,
  },
});
