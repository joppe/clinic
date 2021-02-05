module.exports = {
    coverageDirectory: 'coverage',
    globals: {
        'ts-jest': {
            tsconfig: {
                module: 'commonjs',
            },
        },
    },
    preset: 'ts-jest',
};
