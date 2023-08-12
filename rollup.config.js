import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: ['dist/src/st-test.js'],
  output: {
    entryFileNames: '[name].js',
    assetFileNames: '[hash][extname]',
    format: 'es',
    dir: 'dist/bundle',
  },
  preserveEntrySignatures: false,

  plugins: [
    /** Resolve bare module imports */
    nodeResolve(),
    commonjs(),
    json()
  ],
};
