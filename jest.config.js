module.exports = {
  testEnvironment: 'node',
  // Exit the test suite immediately upon the first failing test suite
  bail: true,
  // Each individual test should be reported during the run
  verbose: true,
  setupFilesAfterEnv: [
    'jest-extended'
  ],
  collectCoverageFrom: [
    'app/**/*.{js,jsx}',
    '!**/node_modules/**'
  ],
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  testMatch: [
    '<rootDir>/test/**/?(*.)+(spec|test).js?(x)'
  ]
};
