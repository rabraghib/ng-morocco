/// <reference types="vitest" />

import { defineConfig, normalizePath } from 'vite';
import analog from '@analogjs/platform';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { getPlaylistRoutes } from './src/server/lib/youtube-api';
import { expand as dotenvExpand } from 'dotenv-expand';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { prepareDatabaseAndSecrets } from './src/server/prepare';

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
  const envFiles = getEnvFilesForMode(mode, process.cwd());
  dotenvExpand(
    dotenv.config({
      path: envFiles,
    }),
  );
  await prepareDatabaseAndSecrets();
  const playlistRoutes = await getPlaylistRoutes();
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
        prerender: {
          routes: ['/', '/playlist', ...playlistRoutes],
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
      'import.meta.vitest': mode !== 'production',
    },
  };
});

function getEnvFilesForMode(mode: string, envDir: string): string[] {
  return [
    /** mode local file */ `.env.${mode}.local`,
    /** mode file */ `.env.${mode}`,
    /** local file */ `.env.local`,
    /** default file */ `.env`,
  ].map((file) => normalizePath(path.join(envDir, file)));
}
