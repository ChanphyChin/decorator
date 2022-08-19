import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import image from '@rollup/plugin-image';
import styles from "rollup-plugin-styles";
import jsx from 'acorn-jsx';


const config = [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'lib/index.ts',
                format: 'es',
            },
        ],
        acornInjectPlugins: [jsx()],
        plugins: [
            resolve(),
            babel({
                babelHelpers: 'bundled',
                extensions: [
                    ...DEFAULT_EXTENSIONS,
                    '.ts',
                    '.tsx'
                ],
            }),
            typescript({ compilerOptions: { jsx: 'preserve' } }),
            image(),
            styles(),
            commonjs({ extensions: ['.js', '.ts'] }),
        ],
        external: ['antd', 'react'],
    },
];

export default config;
