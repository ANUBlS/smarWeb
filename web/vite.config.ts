import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { cpSync, existsSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

/**
 * The transpiled SmartBank units (src/generated, ~75 MB of plain ES modules and JSON layouts) are
 * loaded at run time by src/runtime/loader.ts, one file per unit on first use. They are copied to
 * dist/generated as they are instead of going through Rollup, which keeps builds fast and small.
 */
function copyGenerated(): Plugin {
  let outDir = 'dist';
  return {
    name: 'smartweb-copy-generated',
    apply: 'build',
    configResolved(c) { outDir = resolve(c.root, c.build.outDir); },
    closeBundle() {
      const to = resolve(outDir, 'generated');
      if (existsSync(to)) rmSync(to, { recursive: true, force: true });
      cpSync(resolve(__dirname, 'src/generated'), to, {
        recursive: true,
        filter: (src) => !src.endsWith('report.json'),
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), copyGenerated()],
  build: { chunkSizeWarningLimit: 4000, target: 'es2022' },
  server: { port: 5173 },
});
