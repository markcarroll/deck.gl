// prettier-ignore
module.exports = {
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins: ['react'],
  extends: ['uber-jsx', 'uber-es2015', 'prettier', 'prettier/react', 'plugin:import/errors'],
  settings: {
    'import/core-modules': [
      '@luma.gl/core',
      '@luma.gl/constants',
      'math.gl',
      'viewport-mercator-project'
    ]
  },
  rules: {
    'guard-for-in': 0,
    'no-inline-comments': 0,
    camelcase: 0,
    'react/forbid-prop-types': 0,
    'react/no-deprecated': 0,
    'import/no-unresolved': ['error', {ignore: ['test']}],
    'import/no-extraneous-dependencies': ['error', {devDependencies: false, peerDependencies: true}]
  },
  overrides: {
    files: ['*.spec.js', 'webpack.config.js', '**/bundle/*.js'],
    rules: {
      'import/no-extraneous-dependencies': 0
    }
  }
};