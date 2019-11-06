module.exports = {
  bail: 1,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**',
    '!<rootDir>/node_modules/',
    '!<rootDir>/src/index.js',
  ],
  coverageDirectory: '<rootDir>/coverage',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testMatch: ['**/src/**/*.test.js'],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
 };