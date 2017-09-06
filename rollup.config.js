import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import cjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
export default {
    input: './index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'umd'
    },
    name: 'PolymerCatPaw',
    plugins: [
        svelte({
          css: css => {
            css.write('dist/bundle.css');
          },
          customElement: true
        }),
        resolve(),
        cjs(),
        babel()
        // uglify()
    ]
}
