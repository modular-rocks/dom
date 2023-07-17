module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ['<rootDir>/src/'],
  "setupFiles": [
    "./__mocks__/client.js"
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};