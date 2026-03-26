import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import stylistic from '@stylistic/eslint-plugin';

const config = [
    ...nextCoreWebVitals,
    {
        files: ['**/*.{js,mjs,ts,tsx}'],
        plugins: {
            '@stylistic': stylistic
        },
        rules: {
            '@stylistic/comma-dangle': 'off',
            'comma-dangle': ['error', {
                arrays: 'never',
                objects: 'never',
                imports: 'never',
                exports: 'never',
                functions: 'never'
            }],
            '@stylistic/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: 'always' }],
            '@stylistic/jsx-quotes': ['error', 'prefer-double']
        }
    },
    {
        files: ['__mocks__/next-image.js'],
        rules: {
            '@next/next/no-img-element': 'off'
        }
    },
    {
        ignores: ['coverage/**', '.pnp.loader.mjs']
    }
];

export default config;
