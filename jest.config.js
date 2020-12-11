module.exports = {
    coverageDirectory: 'coverage',
    globals: {
        'ts-jest': {
            tsConfig: {
                module: 'commonjs',
            },
        },
    },
    preset: 'ts-jest',
};
