import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    alias: { '~': './app' },
    include: ['**/__tests__/**/*.test.ts{,x}'],
    coverage: {
      // Coverage reporters
      all: true,
      include: ['app/**/*.ts{,x}'],
      exclude: [
        'app/*.ts{,x}',
        '**/__tests__/*.test.ts{,x}',
        'app/scripts/*.ts',
      ],

      // Coverage thresholds
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
    globals: true,
    setupFiles: ['./vitest-setup.ts'],
  },
})
