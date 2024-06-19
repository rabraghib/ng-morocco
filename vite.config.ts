/// <reference types="vitest" />

import { defineConfig, loadEnv } from 'vite';
import analog from '@analogjs/platform';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

if (process.env['NETLIFY'] === 'true') {
  let base = process.env['URL'];

  if (process.env['CONTEXT'] === 'deploy-preview') {
    base = `${process.env['DEPLOY_PRIME_URL']}/`;
  }

  process.env['VITE_BASE_URL'] = base;
  process.env['VITE_ANALOG_PUBLIC_BASE_URL'] = base;
}

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    build: {
      target: ['es2020'],
    },
    resolve: {
      mainFields: ['module'],
    },
    ssr: {
      noExternal: ['@ngaox/**', 'ngx-markdown'],
    },
    plugins: [
      analog({
        vite: {
          inlineStylesExtension: 'scss',
        },
      }),
      nodePolyfills(),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/test-setup.ts'],
      include: ['**/*.spec.ts'],
      reporters: ['default'],
    },
    define: {
      'import.meta.env': env,
      'import.meta.vitest': mode !== 'production',
    },
  };
});
