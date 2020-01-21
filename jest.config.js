module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleFileExtensions: [
    'js',
    'jsx',
  ],
  modulePaths: [
    '<rootDir>/node_modules/',
    '<rootDir>/node_modules/meteor-jest-stubs/lib/',
  ],
  moduleNameMapper: {
    '^(.*):(.*)$': '$1_$2',
  },
  unmockedModulePathPatterns: [
    '/^imports\\/.*\\.jsx?$/',
    '/^node_modules/',
  ],
};
/*
moduleNameMapper: {
    '^meteor/(.*)': '<rootDir>/.meteorMocks/index.js',
  },
*/