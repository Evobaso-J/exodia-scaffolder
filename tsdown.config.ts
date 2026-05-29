import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    "parse-config": "src/parse-config.ts",
    "resolve-layout": "src/resolve-layout.ts",
    "init-structure": "src/init-structure.ts",
  },
  format: ["es"],
  outDir: "dist",
  outExtensions: () => ({ js: ".mjs" }),
  target: "node24",
  platform: "node",
  treeshake: true,
  clean: true,
  dts: false,
  // Skill runs helpers with no `pnpm install`, so bundle every dep. Regex
  // (not a named allowlist) blocks future deps from silently re-externalizing.
  deps: {
    alwaysBundle: [/./],
  },
  banner: {
    js: "#!/usr/bin/env node",
  },
});
