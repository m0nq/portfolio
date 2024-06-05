/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
    // preset: 'ts-jest',
    // testEnvironment: 'jsdom',
    // transform: {
    //     '^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`
    // },
    moduleNameMapper: {
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
        '^@contexts/(.*)$': '<rootDir>/src/contexts/$1',
        '^@data-types/(.*)$': '<rootDir>/src/data-types/$1',
        '^@utils/(.*)$': '<rootDir>/src/utils/$1'
        // '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
        // '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`
    },
    testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`, `<rootDir>.*/out`],
    // transformIgnorePatterns: [`node_modules/(?!(gatsby|gatsby-script|gatsby-link)/)`],
    globals: {
        __PATH_PREFIX__: ``
    },
    testEnvironmentOptions: {
        url: `http://localhost`
    }
    // setupFiles: [`<rootDir>/loadershim.js`]
};
