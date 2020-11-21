module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  coverageReporters: ['html-spa'],
  setupFilesAfterEnv: [
      "./jest.setup.ts"
  ]
};
