module.exports = {
  branches: [
    "main",
    {
      name: "beta",
      prerelease: true,
    },
    {
      name: "alpha",
      prerelease: true,
    },
  ],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        releaseRules: [
          {
            type: "feature",
            release: "patch",
          },
          {
            type: "feat",
            release: "patch",
          },
          {
            type: "new",
            release: "minor",
          },
          {
            type: "hotfix",
            release: "patch",
          },
          {
            type: "types",
            release: "patch",
          },
        ],
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        presetConfig: {
          types: [
            {
              section: "💥 BREAKING CHANGES",
              type: "breaking",
            },

            {
              section: "✨ New Things",
              type: "new",
            },

            {
              section: "✨ Features",
              type: "feat",
            },
            {
              section: "✨ Features",
              type: "ui",
            },
            {
              section: "✨ Features",
              type: "perf",
            },

            {
              section: "🐛 Bug fixes",
              type: "fix",
            },
            {
              section: "🐛 Bug fixes",
              type: "hotfix",
            },
            {
              section: "🐛 Bug fixes",
              type: "adhesive-bandage",
            },

            {
              section: "✅ Adding Tests",
              type: "test",
            },

            {
              section: "🎨 Aesthetic Changes",
              type: "style",
            },
            {
              section: "🎨 Aesthetic Changes",
              type: "docs",
            },
            {
              section: "🎨 Aesthetic Changes",
              type: "typo",
            },
            {
              section: "🎨 Aesthetic Changes",
              type: "analytics",
            },
            {
              section: "🎨 Aesthetic Changes",
              type: "refactoring",
            },
            {
              section: "🎨 Aesthetic Changes",
              type: "mv",
            },
            {
              section: "🎨 Aesthetic Changes",
              type: "assets",
            },
            {
              section: "🎨 Aesthetic Changes",
              type: "review",
            },
            {
              section: "🎨 Aesthetic Changes",
              type: "ux",
            },
            {
              section: "🎨 Aesthetic Changes",
              type: "iphone",
            },
            {
              section: "🎨 Aesthetic Changes",
              type: "animation",
            },
            {
              section: "🎨 Aesthetic Changes",
              type: "access",
            },
            {
              section: "🎨 Aesthetic Changes",
              type: "i18n",
            },

            {
              section: "🚧 Work In Progress",
              type: "experiment",
            },
            {
              section: "🚧 Work In Progress",
              type: "wip",
            },
            {
              section: "🚧 Work In Progress",
              type: "poo",
            },
            {
              section: "🚧 Work In Progress",
              type: "monocle-face",
            },

            {
              section: "📱 Device Compatibility Fixes",
              type: "osx",
            },
            {
              section: "📱 Device Compatibility Fixes",
              type: "linux",
            },
            {
              section: "📱 Device Compatibility Fixes",
              type: "windows",
            },
            {
              section: "📱 Device Compatibility Fixes",
              type: "android",
            },
            {
              section: "📱 Device Compatibility Fixes",
              type: "ios",
            },

            {
              section: "🚀 Deployment Changes",
              type: "deploy",
            },
            {
              section: "🚀 Deployment Changes",
              type: "fix-ci",
            },
            {
              section: "🚀 Deployment Changes",
              type: "ci",
            },

            {
              section: "🚀 Deployment Changes",
              type: "docker",
            },
            {
              section: "🚀 Deployment Changes",
              type: "k8s",
            },
            {
              section: "🚀 Deployment Changes",
              type: "stethoscope",
            },

            {
              section: "📦 Chores",
              type: "prune",
            },
            {
              section: "📦 Chores",
              type: "lint",
            },
            {
              section: "📦 Chores",
              type: "downgrade",
            },
            {
              section: "📦 Chores",
              type: "upgrade",
            },
            {
              section: "📦 Chores",
              type: "pushpin",
            },
            {
              section: "📦️ Chores",
              type: "dep-add",
            },
            {
              section: "📦️ Chores",
              type: "dep-rm",
            },
            {
              section: "📦️ Chores",
              type: "config",
            },
            {
              section: "📦️ Chores",
              type: "docs-code",
            },
            {
              section: "📦️ Chores",
              type: "texts",
            },
            {
              section: "📦️ Chores",
              type: "log-add",
            },
            {
              section: "📦️ Chores",
              type: "log-rm",
            },
            {
              section: "📦️ Chores",
              type: "see-no-evil",
            },
            {
              section: "📦️ Chores",
              type: "wastebasket",
            },
            {
              section: "📦️ Chores",
              type: "coffin",
            },
            {
              section: "📦️ Chores",
              type: "technologist",
            },
            {
              section: "📦️ Chores",
              type: "revert",
            },
            {
              section: "📦️ Chores",
              type: "merge",
            },
            {
              section: "📦️ Chores",
              type: "dep-up",
            },
            {
              section: "📦️ Chores",
              type: "compat",
            },
            {
              section: "📦️ Chores",
              type: "license",
            },
            {
              section: "📦️ Chores",
              type: "db",
            },
            {
              section: "📦️ Chores",
              type: "passport-control",
            },
            {
              section: "📦️ Chores",
              type: "test-tube",
            },
            {
              section: "📦️ Chores",
              type: "release",
            },
            {
              section: "📦️ Chores",
              type: "types",
            },
          ],
        },
      },
    ],
    [
      "@semantic-release/changelog",
      {
        changelogTitle:
          "# Changelog\n\nAll notable changes to this project will be documented in this file. See\n[Conventional Commits](https://conventionalcommits.org) for commit guidelines.",
      },
    ],
    [
      "@semantic-release/npm",
      {
        npmPublish: true,
      },
    ],
    ["@semantic-release/github", {}],
    [
      "@semantic-release/git",
      {
        message:
          "release: :bookmark: ${nextRelease.version} <%= new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' }) %> [skip ci]\n\n${nextRelease.notes}",
        assets: [
          "package.json",
          "package-lock.json",
          "CHANGELOG.md",
          "dist/**/*",
        ],
      },
    ],
  ],
  debug: true,
  ci: true,
};
