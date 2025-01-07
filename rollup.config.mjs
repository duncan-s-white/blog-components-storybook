
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import terser from '@rollup/plugin-terser' 
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

// const packageJson = require('./package.json')

export default [
  {
    input: "src/index.ts",
    output: [
      {
        // file: packageJson.main,
        dir: 'dist/cjs',
        format: 'cjs',
        // sourcemap: true,
        exports: 'named',
        preserveModules: true,
        interop: 'auto',
      },
      {
        // file: packageJson.module,
        dir: 'dist/esm',
        format: 'esm',
        // sourcemap: true,
        exports: 'named',
        preserveModules: true,
        interop: 'auto',
      }
    ],
    plugins: [
      peerDepsExternal(),
      nodeResolve(),
      commonjs(),
      typescript({tsconfig: './tsconfig.json'}),
      terser(),
    ],
    external: ["react", "react-dom"]
  },
  {
    input: 'src/index.ts',
    // output: [{ file: packageJson.types }],
    output: [{ file: "dist/index.d.ts" }],
    plugins: [
      dts()
    ],
  }
]