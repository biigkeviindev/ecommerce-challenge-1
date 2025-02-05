import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/features/(.*)$": "<rootDir>/features/$1",
    "^@/contexts/(.*)$": "<rootDir>/contexts/$1",
    "^@/pages/(.*)$": "<rootDir>/pages/$1",
  },
  testMatch: ["**/*.test.tsx", "**/*.spec.tsx"],
};

export default createJestConfig(customJestConfig);
