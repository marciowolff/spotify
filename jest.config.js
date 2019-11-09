module.exports = {
  bail: 1,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**',
    '!<rootDir>/src/**/__snapshots__',
    '!<rootDir>/src/**/**/__snapshots__',
    '!<rootDir>/src/**/*.stories.js',
    '!<rootDir>/node_modules/',
    '!<rootDir>/src/index.js',
  ],
  coverageDirectory: '<rootDir>/coverage',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testMatch: ['**/src/**/*.test.js'],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
};
