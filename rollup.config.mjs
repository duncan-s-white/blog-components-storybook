import { createRequire } from 'node:module'

import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import terser from '@rollup/plugin-terser' 
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import preserveDirectives from 'rollup-plugin-preserve-directives';

const require = createRequire(import.meta.url)

const packageJson = require('./package.json')

const outputOptions = {
  sourcemap: true,
  exports: 'named',
  preserveModules: true,
  // Ensures that CJS default exports are imported properly (based on __esModule)
  // If needed, can switch to 'compat' which checks for .default prop on the default export instead
  // see https://rollupjs.org/configuration-options/#output-interop
  interop: 'auto',
};

export default [
  {
    input: "src/index.ts",
    output: [
      {
        dir: packageJson.main,
        format: 'cjs',
        ...outputOptions,
      },
      {
        dir: packageJson.module,
        format: 'esm',
        ...outputOptions,
      }
    ],
    plugins: [
      peerDepsExternal(),
      nodeResolve(),
      commonjs(),
      typescript({tsconfig: './tsconfig.json'}),
      preserveDirectives(),
      terser(),
    ],
    external: ["react", "react-dom"],
    // Ignore warnings when using "use client" directive
    onwarn(warning, warn) {
      if (warning.code !== 'MODULE_LEVEL_DIRECTIVE') {
        warn(warning);
      }
    },
  },
  {
    input: 'src/index.ts',
    output: [{ file: packageJson.types }],
    plugins: [
      dts()
    ],
  }
]