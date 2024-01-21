/// <reference types="vitest" />

import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '[package name]',
      fileName: '[package name]',
    },
  },
  plugins: [dts()],
  test: {
    globals: true,
    mockReset: true,
    clearMocks: true,
    restoreMocks: true,
  },
})
