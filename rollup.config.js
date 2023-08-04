import vue from 'rollup-plugin-vue';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import buble from "@rollup/plugin-buble";
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/index.js',
    output: {
      format: 'umd',
      file: 'dist/vue3-scrollama.umd.js',
      name: 'ScroLlama',
      exports: 'named'
    },
    plugins: [
      nodeResolve({exportConditions: ['node']}),
      commonjs({include: 'node_modules/**'}),
      vue(),
      buble({
        objectAssign: 'Object.assign',
        transforms: { forOf: false }
      }),
    ]
  },
  // ESM build to be used with webpack/rollup.
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      file: 'dist/vue3-scrollama.esm.js',
      exports: 'named'
    },
    plugins: [
      nodeResolve({exportConditions: ['node']}),
      commonjs({include: 'node_modules/**'}),
      vue(),
      buble({
        objectAssign: 'Object.assign',
        transforms: { forOf: false }
      }),
    ]
  },
  // Browser build.
  {
    input: 'src/wrapper.js',
    output: {
      format: 'iife',
      file: 'dist/vue3-scrollama.min.js',
      name: 'ScroLlama',
      exports: 'named'
    },
    plugins: [
      nodeResolve({exportConditions: ['node']}),
      commonjs({include: 'node_modules/**'}),
      vue(),
      buble({
        objectAssign: 'Object.assign',
        transforms: { forOf: false }
      }),
      terser()
    ]
  }
];
