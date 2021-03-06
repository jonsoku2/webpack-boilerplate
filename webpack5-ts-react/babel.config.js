module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '79',
          ie: '11',
        },
        useBuiltIns: 'usage', // 'entry', false
        corejs: {
          version: 2,
        },
      },
    ],
    [
      '@babel/preset-react',
      {
        useBuiltIns: true,
      },
    ],
    [
      '@emotion/babel-preset-css-prop',
      {
        autoLabel: 'dev-only',
        labelFormat: '[local]',
      },
    ],
    '@babel/preset-typescript',
  ],
  env: {
    development: {
      plugins: [['@emotion', { sourceMap: true }], require.resolve('react-refresh/babel')],
    },
    production: {
      plugins: ['@emotion'],
    },
  },
};
