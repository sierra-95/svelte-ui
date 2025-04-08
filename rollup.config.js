import svelte from 'rollup-plugin-svelte';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-css-only';

export default {
  input: 'packages/index.js',
  output: [
    {
      format: 'esm',
      file: 'dist/bundle.esm.js',
    },
    {
      format: 'cjs',
      file: 'dist/bundle.cjs.js',
    },
  ],
  plugins: [
    resolve({
      // Add 'svelte' to the exportConditions array as per the warning
      exportConditions: ['svelte', 'nodejs'],
    }),
    svelte({
      compilerOptions: {
        dev: false,
      },
      // Ensure styles are handled correctly
      emitCss: true, // This will output a separate CSS file
    }),
    css({
      output: 'dist/bundle.css', // Output a separate CSS file
    }),
    terser(),
  ],
};
