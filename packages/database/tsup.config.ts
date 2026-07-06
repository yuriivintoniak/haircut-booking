import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  shims: true,
  define: {
    "import.meta.url": "import_meta_url",
  },
  banner: {
    js: "const import_meta_url = typeof document === 'undefined' ? require('url').pathToFileURL(__filename).toString() : window.location.href;",
  },
});
