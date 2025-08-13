import type {Config} from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  transform: {'^.+\\.(t|j)sx?$': 'babel-jest'},
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(svg|png|jpe?g|gif|webp)$': '<rootDir>/test/__mocks__/fileMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
  // extensionsToTreatAsEsm: ['.ts', '.tsx'],
};
export default config;
