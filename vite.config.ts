/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    setupFiles: ["./vitest.setup.ts"],
  },
});
