module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'refactor', 'docs', 'chore', 'test', 'hotfix', 'style'],
    ],
    'header-max-length': [2, 'always', 200],
    'scope-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
  },
};
