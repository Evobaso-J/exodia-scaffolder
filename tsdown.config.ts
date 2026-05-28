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
  // Helpers run from the installed skill dir with no `pnpm install` step, so
  // every runtime dep must be inlined. tsdown (a library bundler) externalizes
  // package.json `dependencies` by default; bundle all of them instead so the
  // artifact is self-contained. Bundling everything (not a named list) means a
  // future dep can never silently reintroduce an external import. `node:`
  // builtins stay external automatically.
  deps: {
    alwaysBundle: [/./],
  },
  banner: {
    js: "#!/usr/bin/env node",
  },
});
