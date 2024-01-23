import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/bundle.esm.js',
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [
        typescript({
            tsconfig: 'tsconfig.json',
        }),
        resolve({
            browser: true
        }),
        commonjs(),
    ],
};