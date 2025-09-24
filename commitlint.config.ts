import type { UserConfig } from "@commitlint/types";
import { RuleConfigSeverity } from "@commitlint/types";

const Configuration: UserConfig = {
  // parserPreset: 'conventional-changelog-conventionalcommits',
  // Extend conventional commit configurations
  // https://www.conventionalcommits.org/en/v1.0.0/
  // extends: ['@commitlint/config-conventional'],
  rules: {
    // -------------- TYPE ----------------
    // Ensure type is one of the specified values
    "type-enum": [
      RuleConfigSeverity.Error,
      "always", // Always enforce this rule
      [
        "test", // Adding or updating tests
        "chore", // Other changes that don't modify src or test files
        "docs", // Documentation changes
        "refactor", // Code refactoring without changing functionality
        "fix", // Bug fixes
        "feat", // New features
        "build", // Build-related changes (e.g., compile, package)
        "ci", // Continuous Integration changes
        "style", // Code style changes (formatting, white-space, etc.)
        "perf", // Performance improvements
        "revert", // Revert previous commits, only for emergencies
        "hotfix", // For time-sensitive, emergency fixes
      ],
    ],
    "type-case": [RuleConfigSeverity.Error, "always", "lower-case"],
    "type-empty": [RuleConfigSeverity.Error, "never"],

    // -------------- SCOPE ----------------
    "scope-case": [2, "always", "lower-case"], // Ensures scope is in lower case
    "scope-enum": [
      1,
      "always",
      [
        "ui",
        "api",
        "config",
        "docs",
        "docs-e2e",
        "web",
        "web-e2e",
        "portal",
        "portal-e2e",
        "tools",
      ],
    ],
    // 'scope-empty': [2, 'never'], // Scope should always be provided

    // -------------- SUBJECT ----------------
    // "subject-case": [RuleConfigSeverity.Error, "always", "sentence-case"],
    "subject-empty": [RuleConfigSeverity.Error, "never"],

    // -------------- HEADER ----------------
    // Ensure the header does not exceed 72 characters
    // "header-max-length": [RuleConfigSeverity.Error, "always", 72],
  },
  helpUrl:
    "https://main.dzzy1fby58ukt.amplifyapp.com/docs/contribution-guidelines/conventional-commits",
  prompt: {
    settings: {
      enableMultipleScopes: true,
      scopeEnumSeparator: "/",
    },
    messages: {
      skip: ":skip",
      max: "upper %d chars",
      min: "%d chars at least",
      emptyWarning: "can not be empty",
      upperLimitWarning: "over limit",
      lowerLimitWarning: "below limit",
    },
  },
};

export default Configuration;
