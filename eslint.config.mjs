import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'

const config = [
    ...nextCoreWebVitals,
    {
        files: ['__mocks__/next-image.js'],
        rules: {
            '@next/next/no-img-element': 'off'
        }
    },
    {
        ignores: ['coverage/**', '.pnp.loader.mjs']
    }
]

export default config
